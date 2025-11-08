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
  }, []);

  const login = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
    localStorage.setItem('mba_ninja_user', JSON.stringify(userData));
    localStorage.setItem('mba_ninja_logged_in', 'true');
  };

  const logout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem('mba_ninja_user');
    localStorage.removeItem('mba_ninja_logged_in');
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
