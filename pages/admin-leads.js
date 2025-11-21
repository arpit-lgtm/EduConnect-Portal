import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import styles from '../styles/AdminLeads.module.css';

export default function AdminLeads() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [verifiedLeads, setVerifiedLeads] = useState([]); // NEW: Verified OTP leads
  const [activities, setActivities] = useState([]);
  const [fraudAlerts, setFraudAlerts] = useState([]);
  const [userVisits, setUserVisits] = useState({}); // Store visit counts by email
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedUserActivities, setSelectedUserActivities] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [showFraudAlerts, setShowFraudAlerts] = useState(false);
  const [showVisitHistory, setShowVisitHistory] = useState(false);
  const [selectedUserVisits, setSelectedUserVisits] = useState([]);
  const [selectedVisitUserName, setSelectedVisitUserName] = useState('');
  const [activeTab, setActiveTab] = useState('registered'); // NEW: Tab state

  const handleLogout = () => {
    localStorage.removeItem('mba_ninja_admin');
    router.push('/');
  };

  useEffect(() => {
    const adminStatus = localStorage.getItem('mba_ninja_admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
      fetchLeads();
    } else {
      setIsAdmin(false);
      router.replace('/admin-login');
      return;
    }

    const handlePopState = (event) => {
      localStorage.removeItem('mba_ninja_admin');
      router.replace('/admin-login');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  const fetchLeads = async () => {
    try {
      const [leadsResponse, activitiesResponse, fraudResponse, verifiedLeadsResponse] = await Promise.all([
        fetch('/api/get-leads'),
        fetch('/api/get-activities'),
        fetch('/api/get-fraud-alerts'),
        fetch('/api/get-verified-leads') // NEW: Fetch verified OTP leads
      ]);
      
      const leadsData = await leadsResponse.json();
      const activitiesData = await activitiesResponse.json();
      const fraudData = await fraudResponse.json();
      const verifiedLeadsData = await verifiedLeadsResponse.json(); // NEW
      
      setLeads(leadsData.leads || []);
      setActivities(activitiesData.activities || []);
      setFraudAlerts(fraudData.alerts || []);
      setVerifiedLeads(verifiedLeadsData.leads || []); // NEW

      // Fetch visit counts for all unique user emails
      const uniqueEmails = [...new Set((leadsData.leads || []).map(lead => lead.email).filter(Boolean))];
      const visitCounts = {};
      
      await Promise.all(
        uniqueEmails.map(async (email) => {
          try {
            const visitResponse = await fetch(`/api/get-user-visits?email=${encodeURIComponent(email)}`);
            const visitData = await visitResponse.json();
            visitCounts[email] = visitData.totalVisits || 0;
          } catch (error) {
            console.error(`Error fetching visits for ${email}:`, error);
            visitCounts[email] = 0;
          }
        })
      );
      
      setUserVisits(visitCounts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getUserActivities = (userEmail) => {
    if (!userEmail) return [];
    
    const matchedActivities = activities.filter(activity => {
      const activityEmail = activity.userEmail || 
                           activity.user?.email || 
                           activity.user?.emailAddress ||
                           activity.emailAddress ||
                           activity.email;
      
      return activityEmail === userEmail;
    }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    return matchedActivities;
  };

  const openActivityModal = (userEmail, userName) => {
    const activities = getUserActivities(userEmail);
    setSelectedUserActivities(activities);
    setSelectedUserName(userName);
    setShowActivityModal(true);
  };

  const closeActivityModal = () => {
    setShowActivityModal(false);
    setSelectedUserActivities([]);
    setSelectedUserName('');
  };

  const openVisitHistoryModal = async (userEmail, userName) => {
    try {
      const response = await fetch(`/api/get-user-visits?email=${encodeURIComponent(userEmail)}`);
      const data = await response.json();
      
      setSelectedUserVisits(data.visits || []);
      setSelectedVisitUserName(userName);
      setShowVisitHistory(true);
    } catch (error) {
      console.error('Error fetching visit history:', error);
      setSelectedUserVisits([]);
    }
  };

  const closeVisitHistoryModal = () => {
    setShowVisitHistory(false);
    setSelectedUserVisits([]);
    setSelectedVisitUserName('');
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      'Date', 'Time', 'Name', 'Contact Number', 'Email', 'City', 'State', 
      'Gender', 'DOB', 'Qualification'
    ];

    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => {
        const date = new Date(lead.timestamp);
        return [
          date.toLocaleDateString(),
          date.toLocaleTimeString(),
          lead.userData?.fullName || lead.fullName || '',
          lead.userData?.contactNumber || lead.contactNumber || '',
          lead.userData?.emailAddress || lead.emailAddress || lead.email || '',
          lead.userData?.city || lead.city || '',
          lead.userData?.state || lead.state || '',
          lead.userData?.gender || lead.gender || '',
          lead.userData?.dateOfBirth || lead.dateOfBirth || '',
          lead.userData?.currentQualification || lead.qualification || ''
        ].map(field => `"${field}"`).join(',');
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filterLeads = () => {
    let filtered = [...leads];

    // FILTER 1: Only show users who actually registered (have complete userData)
    filtered = filtered.filter(lead => {
      const hasEmail = lead.userData?.emailAddress || lead.emailAddress || lead.email;
      const hasName = lead.userData?.fullName || lead.fullName;
      return hasEmail && hasName; // Must have both email and name to be a real registration
    });

    // FILTER 2: Remove duplicates based on email
    const uniqueLeads = [];
    const seenEmails = new Set();
    
    filtered.forEach(lead => {
      const email = lead.userData?.emailAddress || lead.emailAddress || lead.email;
      if (email && !seenEmails.has(email)) {
        seenEmails.add(email);
        uniqueLeads.push(lead);
      }
    });
    
    filtered = uniqueLeads;

    const now = new Date();
    if (filter === 'today') {
      filtered = filtered.filter(lead => {
        const leadDate = new Date(lead.timestamp);
        return leadDate.toDateString() === now.toDateString();
      });
    } else if (filter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(lead => new Date(lead.timestamp) >= weekAgo);
    } else if (filter === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(lead => new Date(lead.timestamp) >= monthAgo);
    }

    if (searchTerm) {
      filtered = filtered.filter(lead => 
        JSON.stringify(lead).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  const filteredLeads = filterLeads();

  if (!isAdmin && !loading) {
    return (
      <>
        <Head>
          <title>Access Denied | MBA Ninja</title>
        </Head>
        <Header adminMode={true} />
        <div className={styles.container}>
          <div className={styles.accessDenied}>
            <div className={styles.deniedIcon}>🔒</div>
            <h2>Access Denied</h2>
            <p>You need admin credentials to access this page.</p>
            <button 
              onClick={() => router.push('/')}
              className={styles.backButton}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin - Leads Dashboard | MBA Ninja</title>
      </Head>

      <Header adminMode={true} onLogout={handleLogout} />

      <div className={styles.container}>
        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          <button 
            className={activeTab === 'registered' ? styles.activeTabButton : styles.tabButton}
            onClick={() => setActiveTab('registered')}
          >
            📋 Registered Leads ({leads.length})
          </button>
          <button 
            className={activeTab === 'verified' ? styles.activeTabButton : styles.tabButton}
            onClick={() => setActiveTab('verified')}
          >
            ✅ Verified OTP Leads ({verifiedLeads.length})
          </button>
        </div>

        {/* Registered Leads Tab */}
        {activeTab === 'registered' && (
          <>
        <div className={styles.controls}>
          <div className={styles.filters}>
            <button 
              className={filter === 'all' ? styles.active : ''}
              onClick={() => setFilter('all')}
            >
              All ({leads.length})
            </button>
            <button 
              className={filter === 'today' ? styles.active : ''}
              onClick={() => setFilter('today')}
            >
              Today
            </button>
            <button 
              className={filter === 'week' ? styles.active : ''}
              onClick={() => setFilter('week')}
            >
              This Week
            </button>
            <button 
              className={filter === 'month' ? styles.active : ''}
              onClick={() => setFilter('month')}
            >
              This Month
            </button>
          </div>

          <div className={styles.actions}>
            <input 
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button onClick={exportToCSV} className={styles.exportButton}>
              📥 Export CSV
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          {filteredLeads.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No leads found</p>
            </div>
          ) : (
            <table className={styles.leadsTable}>
              <thead>
                <tr>
                  <th>🔒</th>
                  <th>Visits</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Qualification</th>
                  <th>Activity Log</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map(lead => {
                  const date = new Date(lead.timestamp);
                  const userActivities = getUserActivities(lead.userData?.emailAddress || lead.emailAddress || lead.email);
                  
                  // Check if user is flagged in fraud alerts
                  const userEmail = lead.userData?.emailAddress || lead.emailAddress || lead.email;
                  const userPhone = lead.userData?.contactNumber || lead.contactNumber;
                  const isFlagged = fraudAlerts.some(alert => 
                    alert.attemptedEmail === userEmail || 
                    alert.attemptedPhone === userPhone ||
                    alert.existingEmail === userEmail ||
                    alert.existingPhone === userPhone
                  );
                  
                  return (
                    <tr key={lead.id} className={isFlagged ? styles.flaggedRow : ''}>
                      <td>
                        {isFlagged && (
                          <span className={styles.securityFlag} title="Security Alert">🚨</span>
                        )}
                      </td>
                      <td>
                        <button 
                          className={styles.visitCountButton}
                          onClick={() => openVisitHistoryModal(
                            lead.userData?.emailAddress || lead.emailAddress || lead.email,
                            lead.userData?.fullName || lead.fullName || 'User'
                          )}
                          title="Click to view visit history"
                        >
                          {userVisits[lead.userData?.emailAddress || lead.emailAddress || lead.email] || 0}
                        </button>
                      </td>
                      <td>{date.toLocaleDateString()}</td>
                      <td>{date.toLocaleTimeString()}</td>
                      <td>{lead.userData?.fullName || lead.fullName || 'N/A'}</td>
                      <td>{lead.userData?.contactNumber || lead.contactNumber || 'N/A'}</td>
                      <td>{lead.userData?.emailAddress || lead.emailAddress || lead.email || 'N/A'}</td>
                      <td>{lead.userData?.city || lead.city || 'N/A'}</td>
                      <td>{lead.userData?.state || lead.state || 'N/A'}</td>
                      <td>{lead.userData?.gender || lead.gender || 'N/A'}</td>
                      <td>{lead.userData?.dateOfBirth || lead.dateOfBirth || 'N/A'}</td>
                      <td>{lead.userData?.currentQualification || lead.qualification || 'N/A'}</td>
                      <td>
                        <button 
                          className={styles.activityButton}
                          onClick={() => openActivityModal(
                            lead.userData?.emailAddress || lead.emailAddress || lead.email,
                            lead.userData?.fullName || lead.fullName || 'User'
                          )}
                        >
                          📊 View ({userActivities.length})
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        </>
        )}

        {/* Verified OTP Leads Tab */}
        {activeTab === 'verified' && (
          <div className={styles.verifiedLeadsSection}>
            <h2 className={styles.sectionTitle}>✅ Verified OTP Leads</h2>
            <p className={styles.sectionDescription}>
              Users who verified their phone/email via OTP but haven't completed registration yet.
            </p>

            {verifiedLeads.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No verified OTP leads yet. Leads will appear here when users verify their contact information.</p>
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.leadsTable}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Mobile Verified</th>
                      <th>Email Verified</th>
                      <th>Mobile Verified Date</th>
                      <th>Email Verified Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verifiedLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td>{lead.name || '-'}</td>
                        <td>{lead.mobile || '-'}</td>
                        <td>{lead.email || '-'}</td>
                        <td>
                          <span className={lead.mobileVerified ? styles.statusVerified : styles.statusNotVerified}>
                            {lead.mobileVerified ? '✓ Yes' : '✗ No'}
                          </span>
                        </td>
                        <td>
                          <span className={lead.emailVerified ? styles.statusVerified : styles.statusNotVerified}>
                            {lead.emailVerified ? '✓ Yes' : '✗ No'}
                          </span>
                        </td>
                        <td>
                          {lead.mobileVerifiedAt 
                            ? new Date(lead.mobileVerifiedAt).toLocaleString('en-IN', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                              })
                            : '-'}
                        </td>
                        <td>
                          {lead.emailVerifiedAt 
                            ? new Date(lead.emailVerifiedAt).toLocaleString('en-IN', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                              })
                            : '-'}
                        </td>
                        <td>
                          <span className={styles.statusBadge}>
                            {lead.status || 'pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Activity Modal - SHOWS ALL DETAILS */}
        {showActivityModal && (
          <div className={styles.modalOverlay} onClick={closeActivityModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>📈 Activity Log - {selectedUserName}</h2>
                <button className={styles.modalClose} onClick={closeActivityModal}>✕</button>
              </div>
              
              <div className={styles.modalBody}>
                {selectedUserActivities.length === 0 ? (
                  <p className={styles.noActivity}>No activities recorded yet</p>
                ) : (
                  <div className={styles.activityTimeline}>
                    {selectedUserActivities.map((activity, idx) => {
                      // Get icon based on activity type
                      const getActivityIcon = (action) => {
                        if (action?.includes('compare')) return '🏛️';
                        if (action?.includes('course') || action?.includes('explorer')) return '📚';
                        if (action?.includes('questionnaire')) return '📝';
                        if (action?.includes('university') || action?.includes('contact')) return '📞';
                        if (action?.includes('chatbot') || action?.includes('chat')) return '💬';
                        if (action?.includes('login')) return '👤';
                        return '📊';
                      };
                      
                      return (
                        <div key={activity.id || idx} className={styles.timelineItem}>
                          <div className={styles.timelineDot}>{getActivityIcon(activity.action)}</div>
                          <div className={styles.timelineContent}>
                            <div className={styles.timelineHeader}>
                              <strong className={styles.timelineAction}>
                                {activity.action?.replace(/_/g, ' ')}
                              </strong>
                              <span className={styles.timelineTime}>
                                {new Date(activity.timestamp).toLocaleString()}
                              </span>
                            </div>
                          
                          <div className={styles.timelineDetails}>
                            
                            {/* Universities Compared */}
                            {activity.universities && activity.universities.length > 0 && (
                              <div className={styles.detailSection}>
                                <strong>🏛️ Universities Selected for Comparison:</strong>
                                <ul className={styles.detailList}>
                                  {activity.universities.map((uni, i) => (
                                    <li key={i}>{uni}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {/* Course Information */}
                            {activity.course && (
                              <div className={styles.detailSection}>
                                <strong>📚 Course Clicked:</strong> {activity.course}
                              </div>
                            )}
                            {activity.courseName && (
                              <div className={styles.detailSection}>
                                <strong>📚 Course Name:</strong> {activity.courseName}
                              </div>
                            )}
                            {activity.category && (
                              <div className={styles.detailSection}>
                                <strong>📂 Category:</strong> {activity.category}
                              </div>
                            )}
                            {activity.count && (
                              <div className={styles.detailSection}>
                                <strong>🔢 Total Selected:</strong> {activity.count} universities
                              </div>
                            )}
                            
                            {/* University Matcher Questionnaire */}
                            {activity.questionnaireResponses && Object.keys(activity.questionnaireResponses).length > 0 && (
                              <div className={styles.detailSection}>
                                <strong>📝 University Matcher - User Selections:</strong>
                                <div className={styles.questionnaireBox}>
                                  {Object.entries(activity.questionnaireResponses).map(([key, value]) => {
                                    if (!value || value === '') return null;
                                    
                                    // Format the key nicely
                                    const formattedKey = key
                                      .replace(/([A-Z])/g, ' $1')
                                      .trim()
                                      .split(' ')
                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join(' ');
                                    
                                    return (
                                      <div key={key} className={styles.questionnaireItem}>
                                        <span className={styles.qLabel}>{formattedKey}:</span>
                                        <span className={styles.qValue}>
                                          {typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                            
                            {/* University */}
                            {activity.university && (
                              <div className={styles.detailSection}>
                                <strong>🏛️ University Contacted:</strong> 
                                {typeof activity.university === 'string' 
                                  ? activity.university 
                                  : activity.university.universityName || JSON.stringify(activity.university)
                                }
                              </div>
                            )}
                            {activity.universityName && !activity.university && (
                              <div className={styles.detailSection}>
                                <strong>🏛️ University:</strong> {activity.universityName}
                              </div>
                            )}
                            
                            {/* Chatbot Conversation */}
                            {activity.userMessage && (
                              <div className={styles.detailSection}>
                                <strong>💬 User Asked:</strong> "{activity.userMessage}"
                              </div>
                            )}
                            {activity.botResponse && (
                              <div className={styles.detailSection}>
                                <strong>🤖 AI Response:</strong> {activity.botResponse}
                              </div>
                            )}
                            
                            {/* Login Info */}
                            {activity.courseInterest && (
                              <div className={styles.detailSection}>
                                <strong>🎯 Course Interest:</strong> {activity.courseInterest}
                              </div>
                            )}
                            {activity.studyMode && (
                              <div className={styles.detailSection}>
                                <strong>📖 Study Mode:</strong> {activity.studyMode}
                              </div>
                            )}
                            
                            {/* Tool Used */}
                            {activity.tool && (
                              <div className={styles.detailSection}>
                                <strong>🛠️ Tool Used:</strong> {activity.tool}
                              </div>
                            )}
                            
                            {/* Page Visited */}
                            {activity.page && (
                              <div className={styles.detailSection}>
                                <strong>📍 Page:</strong> {activity.page}
                              </div>
                            )}
                            
                          </div>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Fraud Alerts Panel */}
        {showFraudAlerts && fraudAlerts.length > 0 && (
          <div className={styles.modalOverlay} onClick={() => setShowFraudAlerts(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>🚨 Security & Fraud Alerts</h2>
                <button className={styles.modalClose} onClick={() => setShowFraudAlerts(false)}>✕</button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.fraudAlertsGrid}>
                  {fraudAlerts.map((alert, idx) => (
                    <div key={alert._id || idx} className={`${styles.fraudCard} ${styles[alert.severity]}`}>
                      <div className={styles.fraudHeader}>
                        <span className={styles.fraudType}>{alert.fraudType.replace(/_/g, ' ').toUpperCase()}</span>
                        <span className={`${styles.severityBadge} ${styles[alert.severity]}`}>
                          {alert.severity}
                        </span>
                      </div>
                      
                      <div className={styles.fraudDetails}>
                        <div className={styles.fraudSection}>
                          <strong>🔍 Attempted Registration:</strong>
                          <p>Name: {alert.attemptedName}</p>
                          <p>Email: {alert.attemptedEmail}</p>
                          <p>Phone: {alert.attemptedPhone}</p>
                        </div>
                        
                        <div className={styles.fraudSection}>
                          <strong>✅ Existing User:</strong>
                          <p>Name: {alert.existingName}</p>
                          <p>Email: {alert.existingEmail}</p>
                          <p>Phone: {alert.existingPhone}</p>
                        </div>
                        
                        <div className={styles.fraudSection}>
                          <strong>📝 Description:</strong>
                          <p>{alert.description}</p>
                        </div>
                        
                        <div className={styles.fraudMeta}>
                          <span>🕒 {new Date(alert.lastAttempt).toLocaleString()}</span>
                          <span>📍 IP: {alert.ipAddress}</span>
                          {alert.attemptCount > 1 && (
                            <span className={styles.attemptCount}>
                              🔄 {alert.attemptCount} attempts
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visit History Modal */}
        {showVisitHistory && (
          <div className={styles.modalOverlay} onClick={closeVisitHistoryModal}>
            <div className={styles.visitHistoryModal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>🕒 Visit History - {selectedVisitUserName}</h2>
                <button className={styles.modalClose} onClick={closeVisitHistoryModal}>✕</button>
              </div>
              
              <div className={styles.modalBody}>
                {selectedUserVisits.length === 0 ? (
                  <p className={styles.noData}>No visit history found</p>
                ) : (
                  <div className={styles.visitHistoryList}>
                    <div className={styles.visitSummary}>
                      <h3>Total Visits: <span className={styles.visitCount}>{selectedUserVisits.length}</span></h3>
                    </div>
                    
                    {selectedUserVisits.map((visit, index) => (
                      <div key={visit._id || index} className={styles.visitCard}>
                        <div className={styles.visitHeader}>
                          <span className={styles.visitNumber}>Visit #{selectedUserVisits.length - index}</span>
                          <span className={styles.visitDevice}>{visit.deviceInfo || 'Desktop'}</span>
                        </div>
                        
                        <div className={styles.visitDetails}>
                          <div className={styles.visitRow}>
                            <span className={styles.visitLabel}>📅 Date:</span>
                            <span className={styles.visitValue}>
                              {new Date(visit.visitDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          <div className={styles.visitRow}>
                            <span className={styles.visitLabel}>🕐 Time:</span>
                            <span className={styles.visitValue}>
                              {new Date(visit.visitDate).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                              })}
                            </span>
                          </div>
                          
                          <div className={styles.visitRow}>
                            <span className={styles.visitLabel}>📍 IP Address:</span>
                            <span className={styles.visitValue}>{visit.ipAddress || 'Unknown'}</span>
                          </div>
                          
                          <div className={styles.visitRow}>
                            <span className={styles.visitLabel}>💻 Device:</span>
                            <span className={styles.visitValue}>{visit.deviceInfo || 'Desktop'}</span>
                          </div>
                          
                          {visit.userAgent && visit.userAgent !== 'unknown' && (
                            <div className={styles.visitRow}>
                              <span className={styles.visitLabel}>🌐 Browser:</span>
                              <span className={styles.visitValue} title={visit.userAgent}>
                                {visit.userAgent.substring(0, 60)}...
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
