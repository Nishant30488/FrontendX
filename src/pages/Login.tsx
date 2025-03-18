import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import CustomEyeIcon from '../components/CustomEyeIcon';

export default function Login() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'}`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className={`mt-6 text-center text-3xl font-bold tracking-tight 
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Sign in to your account
        </h2>
        <p className={`mt-2 text-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Or{' '}
          <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 
          ${theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-100'}`}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4 animate-fadeIn">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input-field transition-all duration-300 
                    ${theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-500 focus:ring-primary-500 hover:border-gray-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 hover:border-gray-400'}`}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Password
              </label>
              <div className={`mt-1 relative rounded-md shadow-sm transition-all duration-300 
                ${isPasswordFocused ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}`}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className={`input-field pr-10 transition-all duration-300 
                    ${theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-500 focus:ring-primary-500 hover:border-gray-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 hover:border-gray-400'}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={`absolute inset-y-0 right-0 pr-3 flex items-center justify-center transition-all duration-300
                    transform ${isPasswordFocused ? 'scale-110' : ''} hover:scale-110 active:scale-95`}
                >
                  <span className="absolute w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <CustomEyeIcon 
                    isOpen={showPassword} 
                    isDarkTheme={theme === 'dark'} 
                    className="h-6 w-6" 
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={`h-4 w-4 rounded transition-colors duration-200
                    ${theme === 'dark'
                      ? 'border-gray-600 bg-gray-700 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-800'
                      : 'border-gray-300 text-primary-600 focus:ring-primary-500'}`}
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white
                  bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 
                  transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg 
                  active:translate-y-0 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                <span className="relative">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    'Sign in'
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 