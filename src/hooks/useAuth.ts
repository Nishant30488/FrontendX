import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'brand' | 'influencer';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored auth token and validate it
    const token = localStorage.getItem('auth_token');
    if (token) {
      // TODO: Implement token validation with backend
      // For now, we'll just simulate a user
      setState({
        user: {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          role: 'brand',
        },
        loading: false,
        error: null,
      });
    } else {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      // TODO: Implement actual login API call
      // For now, we'll just simulate a successful login
      const user = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'brand' as const,
      };
      localStorage.setItem('auth_token', 'dummy_token');
      setState({
        user,
        loading: false,
        error: null,
      });
      navigate('/dashboard');
    } catch (error) {
      setState({
        user: null,
        loading: false,
        error: 'Invalid email or password',
      });
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    role: 'brand' | 'influencer';
  }) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      // TODO: Implement actual registration API call
      // For now, we'll just simulate a successful registration
      const user = {
        id: '1',
        ...userData,
      };
      localStorage.setItem('auth_token', 'dummy_token');
      setState({
        user,
        loading: false,
        error: null,
      });
      navigate('/dashboard');
    } catch (error) {
      setState({
        user: null,
        loading: false,
        error: 'Registration failed. Please try again.',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setState({
      user: null,
      loading: false,
      error: null,
    });
    navigate('/');
  };

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    register,
    logout,
  };
} 