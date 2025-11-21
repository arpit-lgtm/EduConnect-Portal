import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUserData = localStorage.getItem('mba_ninja_user');
    const storedLoginStatus = localStorage.getItem('mba_ninja_logged_in');
    
    if (storedLoginStatus === 'true' && storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        // Clear invalid data
        localStorage.removeItem('mba_ninja_user');
        localStorage.removeItem('mba_ninja_logged_in');
      }
    }
    setIsLoading(false);

    // Listen for storage changes in other tabs (cross-tab synchronization)
    const handleStorageChange = (e) => {
      // Check for logout event broadcast
      if (e.key === 'mba_ninja_logout_event') {
        console.log('🔄 Logout event detected from another tab - logging out');
        setUserData(null);
        setIsLoggedIn(false);
        return;
      }

      // Only react to changes from other tabs (e.storageArea will be set)
      if (e.key === 'mba_ninja_logged_in') {
        if (e.newValue === 'false' || e.newValue === null) {
          // User logged out in another tab
          console.log('🔄 Logout detected in another tab - syncing logout');
          setUserData(null);
          setIsLoggedIn(false);
          localStorage.removeItem('mba_ninja_user');
          localStorage.removeItem('mba_ninja_logged_in');
        } else if (e.newValue === 'true') {
          // User logged in in another tab
          console.log('🔄 Login detected in another tab - syncing login');
          const newUserData = localStorage.getItem('mba_ninja_user');
          if (newUserData) {
            try {
              const parsedData = JSON.parse(newUserData);
              setUserData(parsedData);
              setIsLoggedIn(true);
            } catch (error) {
              console.error('Error parsing user data from storage event:', error);
            }
          }
        }
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
    localStorage.setItem('mba_ninja_user', JSON.stringify(userData));
    localStorage.setItem('mba_ninja_logged_in', 'true');
    console.log('✅ User logged in - all tabs will sync');
  };

  const logout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem('mba_ninja_user');
    localStorage.removeItem('mba_ninja_logged_in');
    // Set a logout timestamp to trigger storage event in other tabs
    localStorage.setItem('mba_ninja_logout_event', Date.now().toString());
    // Remove it immediately (this still triggers the event)
    localStorage.removeItem('mba_ninja_logout_event');
    console.log('✅ User logged out - broadcasting to all tabs');
  };

  const value = {
    isLoggedIn,
    userData,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
