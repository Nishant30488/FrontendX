import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheckIcon, DocumentTextIcon, CakeIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function PolicySidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const policyLinks = [
    { path: '/privacy-policy', label: 'Privacy Policy', icon: <ShieldCheckIcon className="h-5 w-5 mr-2" />, desc: 'How we collect, use, and protect your data.' },
    { path: '/terms-of-service', label: 'Terms of Service', icon: <DocumentTextIcon className="h-5 w-5 mr-2" />, desc: 'Rules and guidelines for using our platform.' },
    { path: '/cookie-policy', label: 'Cookie Policy', icon: <CakeIcon className="h-5 w-5 mr-2" />, desc: 'How we use cookies and similar technologies.' },
  ];

  return (
    <div className="hidden lg:flex flex-col justify-between w-64 min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 border-r border-gray-200 shadow-xl transition-all duration-300">
      <div className="flex-1 flex flex-col p-6 pb-2">
        <Link to="/" className="flex items-center mb-6 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group">
          <HomeIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Back to Home
        </Link>
        <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">Legal Documents</h2>
        <nav className="space-y-2">
          {policyLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group shadow-sm hover:shadow-md
                  ${currentPath === link.path
                    ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 ring-2 ring-blue-300 scale-[1.03]'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:scale-[1.02]'}
                `}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
              <p className="ml-11 text-xs text-gray-500 mb-2">{link.desc}</p>
            </div>
          ))}
        </nav>
      </div>
      <div className="p-6 pt-0">
        <a href="mailto:support@adgorithm.com" className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
          Need Help?
        </a>
      </div>
    </div>
  );
} 