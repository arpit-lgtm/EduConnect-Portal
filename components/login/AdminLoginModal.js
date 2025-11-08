import React, { useState } from 'react';
import styles from './AdminLoginModal.module.css';

const AdminLoginModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: 'Admin',
        mobile: '9029444175'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Hardcoded admin credentials
            const validCredentials = {
                name: 'Admin',
                mobile: '9029444175'
            };

            // Check credentials
            if (formData.name === validCredentials.name && 
                formData.mobile === validCredentials.mobile) {
                
                // Store admin session
                localStorage.setItem('mba_ninja_admin', 'true');
                
                alert('✅ Admin access granted!');
                
                // Open admin dashboard in new tab
                window.open('/admin-leads', '_blank');
                
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

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ✕
                </button>
                
                <div className={styles.modalHeader}>
                    <div className={styles.headerIcon}>🔐</div>
                    <h3>Admin Access</h3>
                    <p>Enter admin credentials to access the leads dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.adminForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Admin Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
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
                            value={formData.mobile}
                            onChange={handleInputChange}
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
                        {isSubmitting ? 'Verifying...' : 'ACCESS ADMIN DASHBOARD'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginModal;
