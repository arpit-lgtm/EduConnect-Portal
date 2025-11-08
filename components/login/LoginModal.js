import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { trackLogin } from '../../utils/activityTracker';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const { login } = useAuth();
    const [loginType, setLoginType] = useState(null); // 'student' or 'admin' or null
    const [formData, setFormData] = useState({
        fullName: 'Abdul Sayed',
        contactNumber: '9029444175',
        emailAddress: 'abdul.sayed@gmail.com',
        gender: 'male',
        dateOfBirth: '1980-01-01',
        city: 'Mumbai',
        state: 'Maharashtra',
        currentQualification: 'bachelors',
        courseInterest: 'mba',
        studyMode: 'online'
    });
    const [adminFormData, setAdminFormData] = useState({
        name: 'Admin',
        mobile: '9029444175'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [consentGiven, setConsentGiven] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdminInputChange = (e) => {
        const { name, value } = e.target;
        setAdminFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Hardcoded admin credentials
            const validCredentials = {
                name: 'Admin',
                mobile: '9029444175'
            };

            // Check credentials
            if (adminFormData.name === validCredentials.name && 
                adminFormData.mobile === validCredentials.mobile) {
                
                // Store admin session
                localStorage.setItem('mba_ninja_admin', 'true');
                
                alert('✅ Admin access granted!');
                
                // Open admin dashboard in new tab
                window.open('/admin-leads', '_blank');
                
                // Reset and close
                setLoginType(null);
                setAdminFormData({
                    name: 'Admin',
                    mobile: '9029444175'
                });
                onClose();
            } else {
                alert('❌ Invalid admin credentials!');
            }
        } catch (error) {
            console.error('Admin login error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log('Login form submitted:', formData);
            
            // Get IP address
            let ipAddress = 'Unknown';
            try {
                const ipResponse = await fetch('/api/get-ip');
                const ipData = await ipResponse.json();
                ipAddress = ipData.ip;
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
            
            // Add IP to form data
            const userDataWithIP = {
                ...formData,
                ipAddress: ipAddress,
                loginTimestamp: new Date().toISOString()
            };
            
            // Store user data in auth context and localStorage
            login(userDataWithIP);
            
            // Track login activity
            await trackLogin(userDataWithIP);
            
            alert('Welcome! You have been successfully logged in. You now have access to all our educational tools and features.');
            
            // Reset form, loginType and close modal
            setFormData({
                fullName: 'Abdul Sayed',
                contactNumber: '9029444175',
                emailAddress: 'abdul.sayed@gmail.com',
                gender: 'male',
                dateOfBirth: '1980-01-01',
                city: 'Mumbai',
                state: 'Maharashtra',
                currentQualification: 'bachelors',
                courseInterest: 'mba',
                studyMode: 'online'
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
                            <h4>Student Login</h4>
                            <p>Access educational tools and guidance</p>
                        </button>

                        <button 
                            className={styles.loginTypeButton}
                            onClick={() => setLoginType('admin')}
                        >
                            <div className={styles.loginTypeIcon}>👨‍💼</div>
                            <h4>Admin Login</h4>
                            <p>Access leads dashboard</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Admin Login Form
    if (loginType === 'admin') {
        return (
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                        <h3>Admin Access</h3>
                        <p>Enter admin credentials to access the leads dashboard</p>
                    </div>

                    <form onSubmit={handleAdminSubmit} className={styles.adminForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Admin Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={adminFormData.name}
                                onChange={handleAdminInputChange}
                                required
                                placeholder="Enter admin name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="mobile">Mobile Number *</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={adminFormData.mobile}
                                onChange={handleAdminInputChange}
                                required
                                placeholder="Enter mobile number"
                                pattern="[0-9]{10}"
                            />
                        </div>

                        <div className={styles.devNote}>
                            <p><strong>🔧 Dev Mode:</strong> Credentials are pre-filled for testing</p>
                            <p className={styles.credentials}>
                                Name: <code>Admin</code><br />
                                Mobile: <code>9029444175</code>
                            </p>
                        </div>

                        <button 
                            type="submit" 
                            className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Access Dashboard'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Student Login Form
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                    <h3>Welcome to MBA NINJA</h3>
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
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your contact number"
                                pattern="[0-9]{10}"
                            />
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
                            />
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
                            <label htmlFor="courseInterest">Course Interest</label>
                            <select
                                id="courseInterest"
                                name="courseInterest"
                                value={formData.courseInterest}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Course</option>
                                <option value="mba">MBA</option>
                                <option value="mca">MCA</option>
                                <option value="ma">MA</option>
                                <option value="msc">M.Sc</option>
                                <option value="mcom">M.Com</option>
                                <option value="bba">BBA</option>
                                <option value="bca">BCA</option>
                                <option value="ba">BA</option>
                                <option value="bsc">B.Sc</option>
                                <option value="bcom">B.Com</option>
                                <option value="other">Other</option>
                            </select>
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

                    <button 
                        type="submit" 
                        className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                        disabled={isSubmitting || !consentGiven}
                    >
                        {isSubmitting ? 'Creating Account...' : 'LOGIN'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;