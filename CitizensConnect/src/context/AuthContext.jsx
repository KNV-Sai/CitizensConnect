import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// Firebase configuration (you'll need to replace with your actual config)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for persisted user on app load
    const persistedUser = localStorage.getItem('currentUser');
    if (persistedUser) {
      try {
        const userData = JSON.parse(persistedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing persisted user:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
  }, []);

  // Also listen for Firebase auth changes (for future real auth)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser && !user) {
        // Get user role from localStorage or user claims
        const userRole = localStorage.getItem(`userRole_${firebaseUser.uid}`) || 'Citizen';
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: userRole,
          name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
          authenticated: true
        };
        setUser(userData);
        localStorage.setItem('currentUser', JSON.stringify(userData));
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  const registerWithEmail = async (email, password, userData) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Store user role
      localStorage.setItem(`userRole_${result.user.uid}`, userData.role);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  const loginAsDeveloper = async (employeeId, password) => {
    // For demo purposes - in real app, verify against employee database
    if (employeeId === 'DEV001' && password === 'developer123') {
      const mockUser = {
        uid: 'dev_' + employeeId,
        email: `developer@${employeeId}.com`,
        role: 'Developer',
        name: 'Developer User',
        employeeId,
        authenticated: true
      };
      setUser(mockUser);
      localStorage.setItem(`userRole_${mockUser.uid}`, 'Developer');
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      return mockUser;
    }
    throw new Error('Invalid developer credentials');
  };

  const loginAsPolitician = async (identifier, password) => {
    // For demo purposes - in real app, verify against politician database
    const validPoliticians = {
      'NCBNaidu': { name: 'N. Chandrababu Naidu', party: 'TDP' },
      'YSJagan': { name: 'Y. S. Jagan Mohan Reddy', party: 'YSRCP' }
    };

    if (validPoliticians[identifier] && password === 'politician123') {
      const mockUser = {
        uid: 'pol_' + identifier,
        email: `${identifier}@politician.gov`,
        role: 'Politician',
        name: validPoliticians[identifier].name,
        party: validPoliticians[identifier].party,
        authenticated: true
      };
      setUser(mockUser);
      localStorage.setItem(`userRole_${mockUser.uid}`, 'Politician');
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      return mockUser;
    }
    throw new Error('Invalid politician credentials');
  };

  const loginWithAadhar = async (aadharNumber, otp) => {
    // For demo purposes - in real app, integrate with Aadhar API
    if (aadharNumber.length === 12 && otp === '123456') {
      const mockUser = {
        uid: 'aadhar_' + aadharNumber,
        email: `citizen_${aadharNumber}@aadhar.gov`,
        role: 'Citizen',
        name: `Citizen ${aadharNumber.slice(-4)}`,
        aadharNumber,
        authenticated: true
      };
      setUser(mockUser);
      localStorage.setItem(`userRole_${mockUser.uid}`, 'Citizen');
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      return mockUser;
    }
    throw new Error('Invalid Aadhar number or OTP');
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('currentUser');
      // Clear all user roles
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('userRole_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    loading,
    loginWithEmail,
    registerWithEmail,
    loginAsDeveloper,
    loginAsPolitician,
    loginWithAadhar,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
