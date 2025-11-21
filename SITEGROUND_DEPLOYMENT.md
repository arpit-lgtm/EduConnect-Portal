# SiteGround Deployment Guide for MBA Ninja

## Prerequisites
- SiteGround Cloud Hosting or higher plan
- SSH access enabled
- Git installed on your local machine
- Node.js 18+ support on SiteGround

## Step 1: Enable SSH Access in SiteGround

1. Login to SiteGround Site Tools
2. Go to **DevOps** → **SSH Keys Manager**
3. Generate a new SSH key pair OR upload your existing public key
4. Note your SSH details:
   - Username: (your SiteGround username)
   - Host: (your-domain.com or SSH hostname)
   - Port: 18765 (SiteGround default SSH port)

## Step 2: Connect via SSH (Local Machine)

Open PowerShell and connect:

```powershell
ssh -p 18765 username@your-domain.com
```

Replace:
- `username` with your SiteGround username
- `your-domain.com` with your actual domain or SSH host

## Step 3: Set Up Git Repository on SiteGround

Once connected via SSH:

```bash
# Navigate to your public_html or create app directory
cd ~/public_html
# OR for a subdomain/separate folder:
mkdir -p ~/mba-ninja
cd ~/mba-ninja

# Initialize bare Git repository
git init --bare mba-ninja.git

# Create post-receive hook for auto-deployment
cd mba-ninja.git/hooks
nano post-receive
```

**Add this to post-receive file:**

```bash
#!/bin/bash
GIT_WORK_TREE=/home/username/mba-ninja/live
GIT_DIR=/home/username/mba-ninja/mba-ninja.git
export GIT_WORK_TREE
export GIT_DIR

echo "Deploying to production..."
git checkout -f main

echo "Installing dependencies..."
cd $GIT_WORK_TREE
npm install --production

echo "Building Next.js app..."
npm run build

echo "Restarting application..."
pm2 restart mba-ninja || pm2 start npm --name "mba-ninja" -- start

echo "Deployment complete!"
```

Save and exit (Ctrl+X, Y, Enter)

```bash
# Make the hook executable
chmod +x post-receive

# Create live directory
mkdir -p /home/username/mba-ninja/live
```

## Step 4: Add SiteGround as Git Remote (Local Machine)

In your local project directory:

```powershell
# Add SiteGround remote
git remote add siteground ssh://username@your-domain.com:18765/home/username/mba-ninja/mba-ninja.git

# Verify remotes
git remote -v
```

You should see:
```
origin    https://github.com/arpit-lgtm/EduConnect-Portal.git (fetch)
origin    https://github.com/arpit-lgtm/EduConnect-Portal.git (push)
siteground    ssh://username@your-domain.com:18765/home/username/mba-ninja/mba-ninja.git (fetch)
siteground    ssh://username@your-domain.com:18765/home/username/mba-ninja/mba-ninja.git (push)
```

## Step 5: Configure Environment Variables on SiteGround

SSH into SiteGround and create `.env.local`:

```bash
cd ~/mba-ninja/live
nano .env.local
```

Add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=https://your-domain.com
MSG91_AUTH_KEY=your_msg91_key
MSG91_SENDER=EPLMBA
MSG91_OTP_TEMPLATE_ID=your_template_id
ADMIN_SECRET_KEY=your_admin_key
# Add all other env vars
```

Save and exit.

## Step 6: Install Node.js and PM2 on SiteGround

```bash
# Check Node.js version
node --version

# If Node.js not installed or old version, install via NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 globally (process manager)
npm install -g pm2
```

## Step 7: Deploy from Local Machine

```powershell
# Make sure all changes are committed
git add .
git commit -m "Prepare for SiteGround deployment"

# Push to GitHub (optional, for backup)
git push origin main

# Push to SiteGround (triggers deployment)
git push siteground main
```

## Step 8: Configure Web Server (SiteGround)

### Option A: Using SiteGround's Node.js App Manager

1. Go to Site Tools → **DevOps** → **Node.js Manager**
2. Create new application:
   - **Application Root**: `/home/username/mba-ninja/live`
   - **Application URL**: `your-domain.com` or subdomain
   - **Application Startup File**: `npm start` or `node server.js`
   - **Node.js Version**: 18.x
   - **Port**: Auto-assigned (usually 3000 or higher)

### Option B: Manual Proxy Setup

Add to `.htaccess` in your domain root:

```apache
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

## Step 9: Verify Deployment

```bash
# SSH into SiteGround
ssh -p 18765 username@your-domain.com

# Check if app is running
pm2 status

# View logs
pm2 logs mba-ninja

# Restart if needed
pm2 restart mba-ninja
```

Visit your domain in a browser to test!

## Common Issues & Solutions

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 PID
# Restart PM2
pm2 restart mba-ninja
```

### Permission Denied
```bash
chmod -R 755 ~/mba-ninja/live
```

### Dependencies Not Installing
```bash
cd ~/mba-ninja/live
rm -rf node_modules package-lock.json
npm install
```

## Updating Your App (Future Deployments)

Local machine:
```powershell
git add .
git commit -m "Update description"
git push siteground main
```

The post-receive hook automatically:
1. Pulls latest code
2. Installs dependencies
3. Builds Next.js
4. Restarts PM2 process

## Alternative: FTP/SFTP Upload (Not Recommended)

If Git deployment doesn't work:

1. Build locally: `npm run build`
2. Use FileZilla/WinSCP to upload files via SFTP
3. SSH and run `npm install` and `npm start`

**Note**: This method requires manual updates each time.

---

## Quick Reference Commands

```powershell
# Check deployment status
ssh -p 18765 username@your-domain.com "pm2 status"

# View logs remotely
ssh -p 18765 username@your-domain.com "pm2 logs mba-ninja --lines 50"

# Restart app remotely
ssh -p 18765 username@your-domain.com "pm2 restart mba-ninja"
```

---

**Need Help?** Contact SiteGround support to:
- Enable SSH access
- Confirm Node.js support
- Get SSH hostname and port details
