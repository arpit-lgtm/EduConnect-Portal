import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AdminLogin.module.css';

const AdminLogin = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        password: ''
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
            // Admin credentials (hardcoded in JS)
            const validCredentials = {
                name: 'Abdul',
                password: 'Abdul@2025'
            };

            // Check credentials
            if (formData.name === validCredentials.name && 
                formData.password === validCredentials.password) {
                
                // Store admin session
                localStorage.setItem('mba_ninja_admin', 'true');
                
                // Redirect to admin dashboard
                router.push('/admin-leads');
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

    return (
        <>
            <Head>
                <title>Admin Login - MBA NINJA</title>
                <meta name="description" content="Admin access to MBA NINJA dashboard" />
            </Head>
            
            <div className={styles.container}>
                <div className={styles.loginCard}>
                    {/* MBA NINJA Logo Header */}
                    <div className={styles.logoHeader}>
                        <Image
                            src="/images/MBA NINJA.png"
                            alt="MBA NINJA Logo"
                            width={180}
                            height={48}
                            priority
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>

                    <div className={styles.header}>
                        <div className={styles.headerIcon}>🔐</div>
                        <h2>Admin Access</h2>
                        <p>Enter admin credentials to access the leads dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
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
                            <label htmlFor="password">Password *</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter password"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Verifying...' : 'ACCESS DASHBOARD'}
                        </button>

                        <button 
                            type="button" 
                            className={styles.backButton}
                            onClick={() => router.push('/')}
                        >
                            ← Back to Home
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;