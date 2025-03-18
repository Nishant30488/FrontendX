import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'brand' | 'influencer';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  userType: 'brand' | 'influencer' | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: { name: string; email: string; password: string; role: 'brand' | 'influencer' }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored auth token and validate it
    const token = localStorage.getItem('auth_token');
    if (token) {
      // TODO: Implement token validation with backend
      // For now, we'll just simulate a user
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'brand',
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Implement actual login API call
      // For now, we'll just simulate a successful login
      const newUser = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'brand' as const,
      };
      localStorage.setItem('auth_token', 'dummy_token');
      setUser(newUser);
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setUser(null);
      setLoading(false);
      setError('Invalid email or password');
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    role: 'brand' | 'influencer';
  }) => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Implement actual registration API call
      // For now, we'll just simulate a successful registration
      const newUser = {
        id: '1',
        ...userData,
      };
      localStorage.setItem('auth_token', 'dummy_token');
      setUser(newUser);
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setUser(null);
      setLoading(false);
      setError('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    setError(null);
    navigate('/');
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    userType: user?.role || null,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 