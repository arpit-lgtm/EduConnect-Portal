import styles from './Stats.module.css';

const Stats = () => {
    const stats = [
        {
            number: '60K+',
            label: 'Students',
            description: 'Enrolled through our platform'
        },
        {
            number: '200+',
            label: 'Counselors',
            description: 'Expert guidance available'
        },
        {
            number: '4.7',
            label: 'Google Rating',
            description: 'Based on 1000+ reviews',
            icon: (
                <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statHeader}>
                                {stat.icon}
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;