import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import styles from '../styles/AdminLeads.module.css';

export default function AdminLeads() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all'); // all, today, week, month
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [expandedLead, setExpandedLead] = useState(null); // Track which lead's activities are expanded

  const handleLogout = () => {
    localStorage.removeItem('mba_ninja_admin');
    router.push('/'); // Redirect to homepage instead of closing tab
  };

  useEffect(() => {
    // Check if admin is logged in
    const adminStatus = localStorage.getItem('mba_ninja_admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
      fetchLeads();
    } else {
      setIsAdmin(false);
    }
  }, []);

  const fetchLeads = async () => {
    try {
      const [leadsResponse, activitiesResponse] = await Promise.all([
        fetch('/api/get-leads'),
        fetch('/api/get-activities')
      ]);
      
      const leadsData = await leadsResponse.json();
      const activitiesData = await activitiesResponse.json();
      
      setLeads(leadsData.leads || []);
      setActivities(activitiesData.activities || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getUserActivities = (userEmail) => {
    return activities.filter(activity => 
      activity.user?.email === userEmail
    ).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      'ID', 'Timestamp', 'User Name', 'Email', 'Contact', 'IP Address',
      'Course', 'Specialization', 'Budget', 'Location', 'Study Mode',
      'University Interested', 'Gender', 'DOB', 'City', 'State', 'Qualification'
    ];

    const csvContent = [
      headers.join(','),
      ...leads.map(lead => [
        lead.id,
        lead.timestamp,
        lead.userData?.fullName || '',
        lead.userData?.emailAddress || '',
        lead.userData?.contactNumber || '',
        lead.userData?.ipAddress || lead.ipAddress || 'Unknown',
        lead.questionnaireData?.courseType || '',
        lead.questionnaireData?.specialization || '',
        lead.questionnaireData?.budget || '',
        lead.questionnaireData?.preferredLocation || '',
        lead.questionnaireData?.studyMode || '',
        lead.universityName || '',
        lead.userData?.gender || '',
        lead.userData?.dateOfBirth || '',
        lead.userData?.city || '',
        lead.userData?.state || '',
        lead.userData?.currentQualification || ''
      ].map(field => `"${field}"`).join(','))
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

    // Time-based filter
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

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        JSON.stringify(lead).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  const filteredLeads = filterLeads();

  // Check if admin is authenticated first, no loading screen
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

  // Don't show loading, go straight to content
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
        <header className={styles.header}>
          <h1>📊 Leads Dashboard</h1>
          <p>Total Leads: {leads.length}</p>
        </header>

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

        <div className={styles.leadsContainer}>
          {filteredLeads.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No leads found</p>
            </div>
          ) : (
            filteredLeads.map(lead => (
              <div key={lead.id} className={styles.leadCard}>
                <div className={styles.leadHeader}>
                  <div>
                    <h3>{lead.userData?.fullName || 'Unknown'}</h3>
                    <p className={styles.timestamp}>
                      {new Date(lead.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className={styles.universityBadge}>
                    {lead.universityName}
                  </div>
                </div>

                <div className={styles.leadBody}>
                  <div className={styles.section}>
                    <h4>👤 Contact Information</h4>
                    <div className={styles.infoGrid}>
                      <div><strong>Email:</strong> {lead.userData?.emailAddress}</div>
                      <div><strong>Phone:</strong> {lead.userData?.contactNumber}</div>
                      <div><strong>IP Address:</strong> {lead.userData?.ipAddress || lead.ipAddress || 'Unknown'}</div>
                      <div><strong>City:</strong> {lead.userData?.city || 'N/A'}</div>
                      <div><strong>State:</strong> {lead.userData?.state || 'N/A'}</div>
                      <div><strong>Gender:</strong> {lead.userData?.gender || 'N/A'}</div>
                      <div><strong>DOB:</strong> {lead.userData?.dateOfBirth || 'N/A'}</div>
                      <div><strong>Qualification:</strong> {lead.userData?.currentQualification}</div>
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h4>📚 Course Preferences</h4>
                    <div className={styles.infoGrid}>
                      <div><strong>Course:</strong> {lead.questionnaireData?.courseType}</div>
                      <div><strong>Specialization:</strong> {lead.questionnaireData?.specialization}</div>
                      <div><strong>Study Mode:</strong> {lead.questionnaireData?.studyMode}</div>
                      <div><strong>Budget:</strong> {lead.questionnaireData?.budget}</div>
                      <div><strong>Location:</strong> {lead.questionnaireData?.preferredLocation}</div>
                      <div><strong>Work Experience:</strong> {lead.questionnaireData?.workExperience || 'N/A'}</div>
                    </div>
                  </div>

                  {lead.questionnaireData?.additionalPreferences && (
                    <div className={styles.section}>
                      <h4>✨ Additional Preferences</h4>
                      <p>{lead.questionnaireData.additionalPreferences}</p>
                    </div>
                  )}

                  {/* Activity Timeline */}
                  <div className={styles.section}>
                    <div className={styles.activityHeader}>
                      <h4>📈 User Activity Log</h4>
                      <button 
                        className={styles.toggleButton}
                        onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                      >
                        {expandedLead === lead.id ? '▼ Hide' : `▶ Show (${getUserActivities(lead.userData?.emailAddress).length} activities)`}
                      </button>
                    </div>
                    
                    {expandedLead === lead.id && (
                      <div className={styles.activityTimeline}>
                        {getUserActivities(lead.userData?.emailAddress).length === 0 ? (
                          <p className={styles.noActivity}>No activity recorded yet</p>
                        ) : (
                          getUserActivities(lead.userData?.emailAddress).map((activity, idx) => (
                            <div key={activity.id || idx} className={styles.activityItem}>
                              <div className={styles.activityIcon}>
                                {activity.action === 'login' && '🔐'}
                                {activity.action === 'university_contact' && '📧'}
                                {activity.action === 'questionnaire_start' && '📝'}
                                {activity.action === 'questionnaire_complete' && '✅'}
                                {activity.action === 'chatbot_usage' && '💬'}
                                {activity.action === 'compare_universities' && '⚖️'}
                                {activity.action === 'course_explorer' && '🔍'}
                              </div>
                              <div className={styles.activityContent}>
                                <div className={styles.activityAction}>
                                  <strong>{activity.action.replace(/_/g, ' ').toUpperCase()}</strong>
                                  <span className={styles.activityTime}>
                                    {new Date(activity.timestamp).toLocaleString()}
                                  </span>
                                </div>
                                {activity.details && (
                                  <div className={styles.activityDetails}>
                                    {typeof activity.details === 'object' 
                                      ? JSON.stringify(activity.details, null, 2)
                                      : activity.details
                                    }
                                  </div>
                                )}
                                <div className={styles.activityMeta}>
                                  <span>📍 Page: {activity.page || 'Unknown'}</span>
                                  <span>🌐 IP: {activity.ipAddress || 'Unknown'}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
