# MSG91 Routing Verification

## ✅ CONFIRMED: Transactional Route Configuration

### Configuration Summary

**Environment Variables (.env.local):**
```bash
MSG91_AUTH_KEY=477871AIa65rrFCMf691826d3P1
MSG91_SENDER=API
MSG91_OTP_TEMPLATE_ID=69182745940cd34c1f1937d3  ✅ ENABLED
```

### How Routing Works in MSG91

#### 🎯 TRANSACTIONAL Route (What we're using)
- **Trigger:** Template ID is provided
- **API Endpoint:** `https://control.msg91.com/api/v5/flow`
- **Template ID:** `69182745940cd34c1f1937d3`
- **Sender:** API
- **Benefits:**
  - ✅ Immediate delivery (no bulk queue)
  - ✅ Bypasses DND restrictions
  - ✅ Higher priority in carrier networks
  - ✅ No testing disclaimers
  - ✅ Best for OTP/Alerts

#### ❌ PROMOTIONAL Route (Old behavior - NOT using)
- **Trigger:** No template ID (plain SMS)
- **API Endpoint:** `https://api.msg91.com/api/sendhttp.php`
- **Problems:**
  - ❌ Bulk processed (queued/delayed)
  - ❌ Blocked by DND
  - ❌ Shows "testing" message
  - ❌ Lower priority

### Code Flow

1. **pages/api/send-otp.js (Line 22-24):**
   ```javascript
   if (process.env.MSG91_OTP_TEMPLATE_ID) {
       console.log(`🎯 TRANSACTIONAL ROUTE - Using template`);
       const res = await msg91.sendOtpViaTemplate(contact, otp);
   }
   ```

2. **lib/msg91.js (Line 120-145):**
   ```javascript
   const url = 'https://control.msg91.com/api/v5/flow';
   const payload = {
       template_id: '69182745940cd34c1f1937d3',
       recipients: [{ mobiles: phone, var1: otp }]
   };
   const resp = await axios.post(url, payload, { headers });
   ```

### Verification Logs

When you send OTP, you should see:
```
🎯 TRANSACTIONAL ROUTE - Using template: 69182745940cd34c1f1937d3
   ✅ This will send via Transactional route (immediate delivery, bypasses DND)
📤 Sending template OTP to MSG91:
   🎯 ROUTE: TRANSACTIONAL (Template-based)
   Template ID: 69182745940cd34c1f1937d3
   Sender: API
   Expected Delivery: Immediate (bypasses DND, no bulk queue)
✅ MSG91 Template Response SUCCESS (TRANSACTIONAL)
   Check MSG91 logs - should show "Route: Transactional"
```

### MSG91 Dashboard Verification

After sending OTP, check your MSG91 logs at: https://control.msg91.com/

**Expected Log Entry:**
```
Sender: API
Route: Transactional  ✅ (NOT Promotional)
Status: Delivered
Template: 69182745940cd34c1f1937d3
```

### Historical Proof (Your Earlier Logs)

**✅ Template-based sends were SUCCESSFUL:**
```
2025-11-21 17:38:05  API  Transactional  Delivered  ✅
2025-11-21 17:32:23  API  Transactional  Delivered  ✅
2025-11-21 17:26:54  API  Transactional  Delivered  ✅
2025-11-21 17:23:32  API  Transactional  Delivered  ✅
```

**❌ Non-template sends were PROMOTIONAL:**
```
2025-11-21 19:50:09  API  Promotional  Bulk Processed  ❌
2025-11-21 19:35:46  EPLMBA  Promotional  Bulk Processed  ❌
```

### Conclusion

✅ **CONFIGURATION IS CORRECT FOR TRANSACTIONAL ROUTING**

The system is now configured to:
1. Use template ID `69182745940cd34c1f1937d3`
2. Send via MSG91 Flow API (v5)
3. Route as **Transactional** (not Promotional)
4. Deliver immediately without bulk processing
5. Bypass DND restrictions

**Next Step:** Restart dev server and test OTP login
