import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LoginModal.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { trackLogin } from '../../utils/activityTracker';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const { login } = useAuth();
    const [loginType, setLoginType] = useState(null); // 'student' or 'admin' or null
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        gender: '',
        dateOfBirth: '',
        city: '',
        state: '',
        currentQualification: '',
        courseInterest: '',
        studyMode: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [consentGiven, setConsentGiven] = useState(false);
    const [formError, setFormError] = useState('');

    // OTP-related state for new user registration
    const [phoneOtp, setPhoneOtp] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [phoneOtpSent, setPhoneOtpSent] = useState(false);
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [phoneOtpTimer, setPhoneOtpTimer] = useState(0);
    const [emailOtpTimer, setEmailOtpTimer] = useState(0);
    const [sendingPhoneOtp, setSendingPhoneOtp] = useState(false);
    const [sendingEmailOtp, setSendingEmailOtp] = useState(false);
    const [verifyingPhoneOtp, setVerifyingPhoneOtp] = useState(false);
    const [verifyingEmailOtp, setVerifyingEmailOtp] = useState(false);

    // OTP-related state for quick OTP login
    const [otpFormData, setOtpFormData] = useState({
        name: '',
        contact: '',
        otp: ''
    });
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    // Reset modal state when it closes
    useEffect(() => {
        if (!isOpen) {
            setLoginType(null);
            setIsSubmitting(false);
            resetOtpStates();
        }
    }, [isOpen]);

    // Timer countdown for phone OTP
    useEffect(() => {
        if (phoneOtpTimer > 0) {
            const timer = setTimeout(() => setPhoneOtpTimer(phoneOtpTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [phoneOtpTimer]);

    // Timer countdown for email OTP
    useEffect(() => {
        if (emailOtpTimer > 0) {
            const timer = setTimeout(() => setEmailOtpTimer(emailOtpTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [emailOtpTimer]);

    const resetOtpStates = () => {
        setPhoneOtp('');
        setEmailOtp('');
        setPhoneOtpSent(false);
        setEmailOtpSent(false);
        setPhoneVerified(false);
        setEmailVerified(false);
        setPhoneOtpTimer(0);
        setEmailOtpTimer(0);
        setFormError('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            
            // If qualification changes, clear course interest if it's no longer valid
            if (name === 'currentQualification') {
                const availableCourses = getAvailableCoursesForQualification(value);
                const currentCourseInterest = prev.courseInterest;
                
                // Check if current course interest is still valid for new qualification
                if (currentCourseInterest && !availableCourses.some(course => course.value === currentCourseInterest)) {
                    newData.courseInterest = ''; // Clear invalid selection
                }
            }
            
            return newData;
        });
    };

    // Function to get available courses based on qualification level
    const getAvailableCoursesForQualification = (qualification) => {
        const courseMap = {
            '10th': [
                { value: '', label: 'Select Course' },
                { value: 'other', label: 'Complete 12th to proceed' }
            ],
            '12th': [
                { value: '', label: 'Select Course' },
                { value: 'bba', label: 'BBA - Bachelor of Business Administration' },
                { value: 'bca', label: 'BCA - Bachelor of Computer Applications' },
                { value: 'ba', label: 'BA - Bachelor of Arts' },
                { value: 'bsc', label: 'B.Sc - Bachelor of Science' },
                { value: 'bcom', label: 'B.Com - Bachelor of Commerce' },
                { value: 'other', label: 'Other Undergraduate Course' }
            ],
            'diploma': [
                { value: '', label: 'Select Course' },
                { value: 'bba', label: 'BBA - Bachelor of Business Administration' },
                { value: 'bca', label: 'BCA - Bachelor of Computer Applications' },
                { value: 'ba', label: 'BA - Bachelor of Arts' },
                { value: 'bsc', label: 'B.Sc - Bachelor of Science' },
                { value: 'bcom', label: 'B.Com - Bachelor of Commerce' },
                { value: 'other', label: 'Other Undergraduate Course' }
            ],
            'bachelors': [
                { value: '', label: 'Select Course' },
                { value: 'mba', label: 'MBA - Master of Business Administration' },
                { value: 'mca', label: 'MCA - Master of Computer Applications' },
                { value: 'ma', label: 'MA - Master of Arts' },
                { value: 'msc', label: 'M.Sc - Master of Science' },
                { value: 'mcom', label: 'M.Com - Master of Commerce' },
                { value: 'other', label: 'Other Postgraduate Course' }
            ],
            'masters': [
                { value: '', label: 'Select Course' },
                { value: 'phd', label: 'PhD - Doctor of Philosophy' },
                { value: 'other', label: 'Other Doctoral Course' }
            ],
            'phd': [
                { value: '', label: 'Select Course' },
                { value: 'other', label: 'Post-Doctoral Research' }
            ]
        };

        return courseMap[qualification] || [
            { value: '', label: 'Select qualification first' },
        ];
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Remove all non-digit characters
        const numericValue = value.replace(/\D/g, '');
        // Limit to 10 digits
        const limitedValue = numericValue.slice(0, 10);
        
        setFormData(prev => ({
            ...prev,
            contactNumber: limitedValue
        }));
    };

    const handleOtpPhoneChange = (e) => {
        const value = e.target.value;
        // Remove all non-digit characters
        const numericValue = value.replace(/\D/g, '');
        // Limit to 10 digits
        const limitedValue = numericValue.slice(0, 10);
        
        setOtpFormData(prev => ({
            ...prev,
            contact: limitedValue
        }));
    };

    // Send Phone OTP
    const sendPhoneOTP = async () => {
        if (!formData.contactNumber || formData.contactNumber.length !== 10) {
            setFormError('Please enter a valid 10-digit phone number');
            return;
        }

        setSendingPhoneOtp(true);
        setFormError('');

        try {
            const response = await fetch('/api/send-verification-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'phone',
                    value: formData.contactNumber
                })
            });

            const data = await response.json();

            if (data.success) {
                setPhoneOtpSent(true);
                setPhoneOtpTimer(300); // 5 minutes
                // In development, show OTP
                if (data.devOTP) {
                    console.log('📱 Phone OTP:', data.devOTP);
                    alert(`Development Mode - Phone OTP: ${data.devOTP}`);
                }
            } else {
                setFormError(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            console.error('Error sending phone OTP:', error);
            setFormError('Failed to send OTP. Please try again.');
        } finally {
            setSendingPhoneOtp(false);
        }
    };

    // Send Email OTP
    const sendEmailOTP = async () => {
        if (!formData.emailAddress || !formData.emailAddress.includes('@')) {
            setFormError('Please enter a valid email address');
            return;
        }

        setSendingEmailOtp(true);
        setFormError('');

        try {
            const response = await fetch('/api/send-verification-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'email',
                    value: formData.emailAddress
                })
            });

            const data = await response.json();

            if (data.success) {
                setEmailOtpSent(true);
                setEmailOtpTimer(300); // 5 minutes
                // In development, show OTP
                if (data.devOTP) {
                    console.log('📧 Email OTP:', data.devOTP);
                    alert(`Development Mode - Email OTP: ${data.devOTP}`);
                }
            } else {
                setFormError(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            console.error('Error sending email OTP:', error);
            setFormError('Failed to send OTP. Please try again.');
        } finally {
            setSendingEmailOtp(false);
        }
    };

    // Verify Phone OTP
    const verifyPhoneOTP = async () => {
        if (!phoneOtp || phoneOtp.length !== 6) {
            setFormError('Please enter a valid 6-digit OTP');
            return;
        }

        setVerifyingPhoneOtp(true);
        setFormError('');

        try {
            const response = await fetch('/api/verify-verification-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'phone',
                    value: formData.contactNumber,
                    otp: phoneOtp
                })
            });

            const data = await response.json();

            if (data.success) {
                setPhoneVerified(true);
                setPhoneOtpTimer(0);
            } else {
                setFormError(data.message || 'Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying phone OTP:', error);
            setFormError('Failed to verify OTP. Please try again.');
        } finally {
            setVerifyingPhoneOtp(false);
        }
    };

    // Verify Email OTP
    const verifyEmailOTP = async () => {
        if (!emailOtp || emailOtp.length !== 6) {
            setFormError('Please enter a valid 6-digit OTP');
            return;
        }

        setVerifyingEmailOtp(true);
        setFormError('');

        try {
            const response = await fetch('/api/verify-verification-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'email',
                    value: formData.emailAddress,
                    otp: emailOtp
                })
            });

            const data = await response.json();

            if (data.success) {
                setEmailVerified(true);
                setEmailOtpTimer(0);
            } else {
                setFormError(data.message || 'Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying email OTP:', error);
            setFormError('Failed to verify OTP. Please try again.');
        } finally {
            setVerifyingEmailOtp(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if both phone and email are verified
        if (!phoneVerified) {
            setFormError('Please verify your phone number first');
            return;
        }

        if (!emailVerified) {
            setFormError('Please verify your email address first');
            return;
        }

        setIsSubmitting(true);

        try {
            // Get IP address and location info first
            let ipInfo = { ip: 'Unknown', location: null };
            try {
                const ipResponse = await fetch('/api/get-ip');
                const ipData = await ipResponse.json();
                ipInfo = {
                    ip: ipData.ip,
                    location: ipData.location,
                    userAgent: ipData.userAgent,
                    isLocalhost: ipData.isLocalhost
                };
            } catch (error) {
                console.error('Error fetching IP:', error);
            }

            // SECURITY: Verify user before allowing login
            const verifyResponse = await fetch('/api/verify-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    emailAddress: formData.emailAddress,
                    contactNumber: formData.contactNumber,
                    ipAddress: ipInfo.ip,
                    userAgent: ipInfo.userAgent
                })
            });

            const verifyData = await verifyResponse.json();

            // Block if fraud detected
            if (!verifyData.allowed) {
                setFormError(verifyData.message);
                setIsSubmitting(false);
                return;
            }

            // Show returning user message
            if (verifyData.status === 'returning_user') {
                console.log('✅ Returning user verified:', verifyData.message);
            }
            
            console.log('Login form submitted:', formData);
            
            // Add enhanced IP info to form data
            const userDataWithIP = {
                ...formData,
                ipAddress: ipInfo.ip,
                locationInfo: ipInfo.location,
                userAgent: ipInfo.userAgent,
                isLocalhost: ipInfo.isLocalhost,
                loginTimestamp: new Date().toISOString(),
                userStatus: verifyData.status, // new_user or returning_user
                flagged: verifyData.flagged || false
            };
            
            // Store user data in auth context and localStorage
            login(userDataWithIP);
            
            // Track login activity
            await trackLogin(userDataWithIP);

            // Track visit for admin dashboard
            try {
                const visitResponse = await fetch('/api/track-visit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.emailAddress,
                        name: formData.fullName,
                        phone: formData.contactNumber
                    })
                });
                
                const visitData = await visitResponse.json();
                console.log('✅ Visit tracked:', visitData.message);
            } catch (error) {
                console.error('Failed to track visit:', error);
            }
            
            // Also save as a lead automatically
            try {
                const leadData = {
                    userData: userDataWithIP,
                    source: 'Student Login',
                    universityName: 'N/A - Direct Login'
                };
                
                await fetch('/api/save-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                });
                
                console.log('✅ Login automatically saved as lead');
            } catch (error) {
                console.error('Failed to save login as lead:', error);
            }
            
            // Reset form, loginType and close modal
            setFormData({
                fullName: '',
                contactNumber: '',
                emailAddress: '',
                gender: '',
                dateOfBirth: '',
                city: '',
                state: '',
                currentQualification: '',
                courseInterest: '',
                studyMode: ''
            });
            setConsentGiven(false);
            setLoginType(null);
            
            // Call onLoginSuccess callback if provided
            if (onLoginSuccess) {
                onLoginSuccess();
            }
            
            onClose();
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // OTP handling functions
    const handleOTPLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (!otpSent) {
                // Step 1: Send OTP
                const response = await fetch('/api/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: otpFormData.name,
                        contact: otpFormData.contact
                    })
                });

                const data = await response.json();
                
                if (data.success) {
                    setOtpSent(true);
                    alert(`OTP sent to ${otpFormData.contact}`);
                } else {
                    alert(data.message || 'Failed to send OTP');
                }
            } else {
                // Step 2: Verify OTP
                const response = await fetch('/api/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: otpFormData.name,
                        contact: otpFormData.contact,
                        otp: otpFormData.otp
                    })
                });

                const data = await response.json();
                
                if (data.success) {
                    // Get IP address and location info
                    let ipInfo = { ip: 'Unknown', location: null };
                    try {
                        const ipResponse = await fetch('/api/get-ip');
                        const ipData = await ipResponse.json();
                        ipInfo = {
                            ip: ipData.ip,
                            location: ipData.location,
                            userAgent: ipData.userAgent,
                            isLocalhost: ipData.isLocalhost
                        };
                    } catch (error) {
                        console.error('Error fetching IP:', error);
                    }

                    // Create user data with existing details
                    const userData = {
                        ...data.userData, // Existing user data from server
                        ipAddress: ipInfo.ip,
                        locationInfo: ipInfo.location,
                        userAgent: ipInfo.userAgent,
                        isLocalhost: ipInfo.isLocalhost,
                        loginTimestamp: new Date().toISOString(),
                        loginType: 'returning-user'
                    };

                    // Login user
                    login(userData);
                    
                    // Track login activity
                    await trackLogin(userData);

                    alert('Welcome back! You have been successfully logged in.');
                    
                    // Reset OTP form and close modal
                    setOtpFormData({ name: '', contact: '', otp: '' });
                    setOtpSent(false);
                    setLoginType(null);
                    
                    if (onLoginSuccess) {
                        onLoginSuccess();
                    }
                    
                    onClose();
                } else {
                    alert(data.message || 'Invalid OTP');
                }
            }
        } catch (error) {
            console.error('OTP login error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResendOTP = async () => {
        try {
            const response = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: otpFormData.name,
                    contact: otpFormData.contact
                })
            });

            const data = await response.json();
            
            if (data.success) {
                alert(`OTP resent to ${otpFormData.contact}`);
            } else {
                alert('Failed to resend OTP');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            alert('Failed to resend OTP');
        }
    };

    if (!isOpen) return null;

    // Choice Screen: Student or Admin
    if (!loginType) {
        return (
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}>
                        ✕
                    </button>
                    
                    <div className={styles.modalHeader}>
                        <div className={styles.headerIcon}>🔐</div>
                        <h3>Welcome to MBA NINJA</h3>
                        <p>Please select your login type</p>
                    </div>

                    <div className={styles.loginTypeChoice}>
                        <button 
                            className={styles.loginTypeButton}
                            onClick={() => setLoginType('student')}
                        >
                            <div className={styles.loginTypeIcon}>👨‍🎓</div>
                            <div>
                                <h4>New User</h4>
                                <p>Complete registration form</p>
                            </div>
                        </button>

                        <button 
                            className={styles.loginTypeButton}
                            onClick={() => setLoginType('returning-student')}
                        >
                            <div className={styles.loginTypeIcon}>🔄</div>
                            <div>
                                <h4>Registered User</h4>
                                <p>Quick login with OTP</p>
                            </div>
                        </button>

                        <button 
                            className={styles.loginTypeButton}
                            onClick={() => {
                                // Open admin login page in new tab
                                window.open('/admin-login', '_blank');
                            }}
                        >
                            <div className={styles.loginTypeIcon}>👨‍💼</div>
                            <div>
                                <h4>Admin</h4>
                                <p>Access dashboard</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Returning Student OTP Login Form
    if (loginType === 'returning-student') {
        return (
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={`${styles.modalContent} ${styles.large}`} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}>
                        ✕
                    </button>
                    
                    <button 
                        className={styles.backButton} 
                        onClick={() => setLoginType('')}
                    >
                        ← Back
                    </button>
                    
                    <div className={styles.modalHeader}>
                        <div className={styles.headerIcon}>🔐</div>
                        <h3>Registered User Login</h3>
                        <p>Enter your details to receive OTP verification</p>
                    </div>

                    <form onSubmit={handleOTPLogin} className={styles.loginForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="otpName">Full Name *</label>
                                <input
                                    type="text"
                                    id="otpName"
                                    value={otpFormData.name}
                                    onChange={(e) => setOtpFormData({...otpFormData, name: e.target.value})}
                                    required
                                    className={styles.input}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="otpContact">Mobile Number *</label>
                                <div className={styles.phoneInputContainer}>
                                    <span className={styles.countryCode}>+91</span>
                                    <input
                                        type="tel"
                                        id="otpContact"
                                        value={otpFormData.contact}
                                        onChange={handleOtpPhoneChange}
                                        required
                                        className={styles.input}
                                        placeholder="Enter 10-digit mobile number"
                                        maxLength="10"
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>
                        </div>

                        {otpSent && (
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="otpCode">Enter OTP *</label>
                                    <input
                                        type="text"
                                        id="otpCode"
                                        value={otpFormData.otp}
                                        onChange={(e) => setOtpFormData({...otpFormData, otp: e.target.value})}
                                        required
                                        className={styles.input}
                                        placeholder="Enter 6-digit OTP"
                                        maxLength="6"
                                    />
                                    <div className={styles.otpInfo}>
                                        OTP sent to {otpFormData.contact}
                                        <button 
                                            type="button" 
                                            className={styles.resendOTP}
                                            onClick={handleResendOTP}
                                        >
                                            Resend OTP
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles.buttonGroup}>
                            <button 
                                type="submit" 
                                className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Please wait...' : otpSent ? 'Verify OTP & Login' : 'Send OTP'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    // Student Registration Form
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={`${styles.modalContent} ${styles.large}`} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ✕
                </button>
                
                <button 
                    className={styles.backButton} 
                    onClick={() => setLoginType(null)}
                >
                    ← Back
                </button>
                
                <div className={styles.modalHeader}>
                    <div className={styles.headerIcon}>🔐</div>
                    <h3>New User Registration</h3>
                    <p>Create your account to access premium educational tools including AI Chatbot, University Matcher, Course Comparison, and personalized guidance from expert counsellors.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contactNumber">Contact Number *</label>
                            <div className={styles.phoneInputContainer}>
                                <span className={styles.countryCode}>+91</span>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handlePhoneChange}
                                    required
                                    placeholder="Enter 10-digit mobile number"
                                    maxLength="10"
                                    pattern="[0-9]{10}"
                                    disabled={phoneVerified}
                                />
                            </div>
                            
                            {/* Phone OTP Section */}
                            <div className={styles.otpSection}>
                                {!phoneVerified && (
                                    <>
                                        {!phoneOtpSent ? (
                                            <button
                                                type="button"
                                                onClick={sendPhoneOTP}
                                                disabled={!formData.contactNumber || formData.contactNumber.length !== 10 || sendingPhoneOtp}
                                                className={styles.sendOtpButton}
                                            >
                                                {sendingPhoneOtp ? '⏳ Sending...' : '📱 Send OTP'}
                                            </button>
                                        ) : (
                                            <div className={styles.otpVerificationBox}>
                                                <input
                                                    type="text"
                                                    placeholder="Enter 6-digit OTP"
                                                    value={phoneOtp}
                                                    onChange={(e) => setPhoneOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                    maxLength="6"
                                                    className={styles.otpInput}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={verifyPhoneOTP}
                                                    disabled={phoneOtp.length !== 6 || verifyingPhoneOtp}
                                                    className={styles.verifyOtpButton}
                                                >
                                                    {verifyingPhoneOtp ? '⏳' : '✓'} Verify
                                                </button>
                                                {phoneOtpTimer > 0 ? (
                                                    <span className={styles.otpTimer}>⏱ {Math.floor(phoneOtpTimer / 60)}:{(phoneOtpTimer % 60).toString().padStart(2, '0')}</span>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={sendPhoneOTP}
                                                        className={styles.resendOtpButton}
                                                    >
                                                        🔄 Resend
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                                {phoneVerified && (
                                    <div className={styles.verifiedBadge}>
                                        ✅ Phone Verified
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="emailAddress">Email Address *</label>
                            <input
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your email address"
                                disabled={emailVerified}
                            />
                            
                            {/* Email OTP Section */}
                            <div className={styles.otpSection}>
                                {!emailVerified && (
                                    <>
                                        {!emailOtpSent ? (
                                            <button
                                                type="button"
                                                onClick={sendEmailOTP}
                                                disabled={!formData.emailAddress || !formData.emailAddress.includes('@') || sendingEmailOtp}
                                                className={styles.sendOtpButton}
                                            >
                                                {sendingEmailOtp ? '⏳ Sending...' : '📧 Send OTP'}
                                            </button>
                                        ) : (
                                            <div className={styles.otpVerificationBox}>
                                                <input
                                                    type="text"
                                                    placeholder="Enter 6-digit OTP"
                                                    value={emailOtp}
                                                    onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                    maxLength="6"
                                                    className={styles.otpInput}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={verifyEmailOTP}
                                                    disabled={emailOtp.length !== 6 || verifyingEmailOtp}
                                                    className={styles.verifyOtpButton}
                                                >
                                                    {verifyingEmailOtp ? '⏳' : '✓'} Verify
                                                </button>
                                                {emailOtpTimer > 0 ? (
                                                    <span className={styles.otpTimer}>⏱ {Math.floor(emailOtpTimer / 60)}:{(emailOtpTimer % 60).toString().padStart(2, '0')}</span>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={sendEmailOTP}
                                                        className={styles.resendOtpButton}
                                                    >
                                                        🔄 Resend
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                                {emailVerified && (
                                    <div className={styles.verifiedBadge}>
                                        ✅ Email Verified
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="Enter your city"
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="Enter your state"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="currentQualification">Current Qualification *</label>
                            <select
                                id="currentQualification"
                                name="currentQualification"
                                value={formData.currentQualification}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Qualification</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="diploma">Diploma</option>
                                <option value="bachelors">Bachelor's Degree</option>
                                <option value="masters">Master's Degree</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="courseInterest">
                                Course Interest
                                {formData.currentQualification && (
                                    <small style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.5rem' }}>
                                        (filtered by qualification)
                                    </small>
                                )}
                            </label>
                            <select
                                id="courseInterest"
                                name="courseInterest"
                                value={formData.courseInterest}
                                onChange={handleInputChange}
                                disabled={!formData.currentQualification}
                            >
                                {getAvailableCoursesForQualification(formData.currentQualification).map(course => (
                                    <option key={course.value} value={course.value}>
                                        {course.label}
                                    </option>
                                ))}
                            </select>
                            {!formData.currentQualification && (
                                <small style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                                    Please select qualification first
                                </small>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="studyMode">Preferred Study Mode</label>
                            <select
                                id="studyMode"
                                name="studyMode"
                                value={formData.studyMode}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Mode</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="distance">Distance Learning</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.consentSection}>
                        <label className={styles.consentCheckbox}>
                            <input
                                type="checkbox"
                                checked={consentGiven}
                                onChange={(e) => setConsentGiven(e.target.checked)}
                                required
                            />
                            <span className={styles.checkmark}></span>
                            <div className={styles.consentText}>
                                <strong>Communication Consent:</strong> I hereby provide my consent and authorization to receive all forms of communication at the mobile number and email address provided above, including but not limited to calls, SMS, WhatsApp messages, and emails, even if my contact details are registered under the Do Not Disturb (DND) or National Customer Preference Register (NCPR) services as regulated by TRAI.
                                <br /><br />
                                Furthermore, I explicitly authorize MBA NINJA and its affiliated entities to share, transfer, or disclose my personal information to any third-party service providers, partner institutions, group companies, authorized representatives, or affiliated service providers for the purpose of delivering educational services, course recommendations, and related communications.
                            </div>
                        </label>
                    </div>

                    {formError && (
                        <div className={styles.errorMessage}>
                            ⚠️ {formError}
                        </div>
                    )}

                    {/* Verification Status Message */}
                    {(!phoneVerified || !emailVerified) && (
                        <div className={styles.verificationWarning}>
                            🔒 Please verify {!phoneVerified && !emailVerified ? 'both phone number and email' : !phoneVerified ? 'phone number' : 'email address'} to enable login
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''} ${(!phoneVerified || !emailVerified) ? styles.disabled : ''}`}
                        disabled={isSubmitting || !consentGiven || !phoneVerified || !emailVerified}
                        title={(!phoneVerified || !emailVerified) ? 'Please verify both phone and email to proceed' : 'Click to login'}
                    >
                        {isSubmitting ? 'Creating Account...' : (!phoneVerified || !emailVerified) ? '🔒 VERIFY TO LOGIN' : '✓ LOGIN'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;