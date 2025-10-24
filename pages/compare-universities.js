import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/CompareUniversities.module.css';

export default function CompareUniversities() {
  const router = useRouter();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get university names from URL query params
      const { unis } = router.query;
      
      if (unis) {
        const universityNames = Array.isArray(unis) 
          ? unis.map(name => decodeURIComponent(name))
          : [decodeURIComponent(unis)];
        loadUniversityData(universityNames);
      } else if (router.isReady) {
        // Router is ready but no universities in URL
        setLoading(false);
      }
    }
  }, [router.query, router.isReady]);

  const loadUniversityData = async (universityNames) => {
    try {
      // Try to load university data from localStorage first
      let foundUniversities = [];
      
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('compareUniversities');
        if (storedData) {
          try {
            const parsedData = JSON.parse(storedData);
            foundUniversities = parsedData.map(uniStr => {
              const uni = JSON.parse(uniStr);
              return {
                ...uni,
                programName: 'Online MBA',
                studentRatings: '4.0',
                totalFees: '₹1,50,000',
                accreditation: 'UGC Approved',
                approvals: 'UGC, AICTE',
                nirfRanking: 'Not Ranked'
              };
            });
          } catch (e) {
            console.error('Error parsing stored university data:', e);
          }
        }
      }

      // If no stored data or parsing failed, fall back to database
      if (!foundUniversities.length) {
        const module = await import('../public/assets/js/comprehensive-unified-database-COMPLETE.js');
        const database = module.default || module;

        foundUniversities = universityNames.map(name => {
          const uni = database.find(u => u.name === name);
          if (uni) {
            return {
              ...uni,
              logo: `/images/universities/${uni.name.replace(/ /g, '-')}.png`,
              programName: 'Online MBA',
              studentRatings: '4.0',
              totalFees: '₹1,50,000',
              accreditation: 'UGC Approved',
              approvals: 'UGC, AICTE',
              nirfRanking: 'Not Ranked',
              educationMode: 'Online, Distance',
              examinationMode: 'Online Proctored',
              onlineClasses: 'Yes',
              industryReadyCurriculum: 'Yes',
              establishmentYear: '2000'
            };
          }
          return {
            name,
            logo: `/images/universities/${name.replace(/ /g, '-')}.png`,
            programName: 'Online MBA',
            studentRatings: '4.0',
            totalFees: '₹1,50,000',
            accreditation: 'UGC Approved',
            approvals: 'UGC, AICTE',
            nirfRanking: 'Not Ranked',
            educationMode: 'Online, Distance',
            examinationMode: 'Online Proctored',
            onlineClasses: 'Yes',
            industryReadyCurriculum: 'Yes',
            establishmentYear: '2000'
          };
        });
      }

      setUniversities(foundUniversities.filter(Boolean));
      setLoading(false);
    } catch (error) {
      console.error('Error loading university data:', error);
      setLoading(false);
    }
  };

  const comparisonParameters = [
    { label: 'Program Name', key: 'programName' },
    { label: 'Student Ratings', key: 'studentRatings' },
    { label: 'Total Fees', key: 'totalFees' },
    { label: 'Accreditation', key: 'accreditation' },
    { label: 'Approvals', key: 'approvals' },
    { label: 'NIRF Ranking', key: 'nirfRanking' },
    { label: 'Education Mode', key: 'educationMode' },
    { label: 'Examination Mode', key: 'examinationMode' },
    { label: 'Online Classes', key: 'onlineClasses' },
    { label: 'Industry Ready Curriculum', key: 'industryReadyCurriculum' },
    { label: 'Establishment Year', key: 'establishmentYear' }
  ];

  const loanPartners = [
    { name: 'FIBE', logo: '/images/fibe.png' },
    { name: 'LiquiLoans', logo: '/images/liquiloans.png' },
    { name: 'Propelld', logo: '/images/propelld.png' },
    { name: 'Avanse', logo: '/images/avanse.png' }
  ];

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.loading}>Loading comparison...</div>
        <Footer />
      </>
    );
  }

  if (universities.length === 0) {
    return (
      <>
        <Header />
        <div className={styles.error}>
          <h2>No universities selected for comparison</h2>
          <button onClick={() => router.back()} className={styles.backBtn}>
            Go Back
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className={styles.comparePage}>
        <div className={styles.container}>
          {/* Page Title */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>University Comparison</h1>
            <p className={styles.pageSubtitle}>
              Comparing {universities.length} {universities.length === 1 ? 'University' : 'Universities'}
            </p>
          </div>

          {/* Comparison Table */}
          <div className={styles.comparisonSection}>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th className={styles.labelColumn}>
                      <div className={styles.parametersHeader}>
                        <span>📊</span>
                        <span>Comparison Parameters</span>
                      </div>
                    </th>
                    {universities.map((uni, index) => (
                      <th key={index} className={styles.universityColumn}>
                        <div className={styles.universityHeader}>
                          <div className={styles.universityLogo}>
                            <img 
                              src={uni.logo} 
                              alt={uni.name}
                              className={styles.logoImage}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                              }}
                            />
                            <div className={styles.logoFallback} style={{ display: 'none' }}>
                              {uni.name.split(' ').slice(0, 2).map(word => word[0]).join('')}
                            </div>
                          </div>
                          <h3 className={styles.universityName}>{uni.name}</h3>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonParameters.map((param, index) => (
                    <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                      <td className={styles.parameterLabel}>
                        <strong>{param.label}</strong>
                      </td>
                      {universities.map((uni, uniIndex) => (
                        <td key={uniIndex} className={styles.parameterValue}>
                          {param.key === 'studentRatings' ? (
                            <span className={styles.rating}>
                              ⭐ {uni[param.key]} / 5.0
                            </span>
                          ) : param.key === 'totalFees' ? (
                            <span className={styles.fees}>{uni[param.key]}</span>
                          ) : param.key === 'nirfRanking' ? (
                            <span className={styles.ranking}>
                              {uni[param.key] === 'Not Ranked' ? (
                                <span className={styles.notRanked}>{uni[param.key]}</span>
                              ) : (
                                <span className={styles.ranked}>#{uni[param.key]}</span>
                              )}
                            </span>
                          ) : (
                            uni[param.key]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Loan/EMI Partners Section */}
          <div className={styles.loanSection}>
            <div className={styles.loanHeader}>
              <h2 className={styles.loanTitle}>💰 Our Loan/EMI Partners</h2>
              <p className={styles.loanSubtitle}>
                Get easy financing options for your education with our trusted partners
              </p>
            </div>

            <div className={styles.loanPartnersGrid}>
              {loanPartners.map((partner, index) => (
                <div key={index} className={styles.loanPartnerCard}>
                  <div className={styles.loanPartnerLogo}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className={styles.loanLogoFallback} style={{ display: 'none' }}>
                      {partner.name}
                    </div>
                  </div>
                  <p className={styles.partnerName}>{partner.name}</p>
                  <button className={styles.applyBtn}>Apply Now</button>
                </div>
              ))}
            </div>

            <div className={styles.loanActions}>
              <button className={styles.compareEmiBtn}>Compare All EMI Options</button>
              <button className={styles.zeroCostBtn}>Apply for Zero Cost EMI</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button onClick={() => window.print()} className={styles.printBtn}>
              🖨️ Print Comparison
            </button>
            <button onClick={() => router.back()} className={styles.backBtn}>
              ← Back to Course Details
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}