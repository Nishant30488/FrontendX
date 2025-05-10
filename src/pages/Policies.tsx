import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, DocumentTextIcon, CakeIcon, HomeIcon } from '@heroicons/react/24/outline';

const policies = [
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />,
    desc: 'Learn how we collect, use, and protect your personal data on our influencer marketing platform.'
  },
  {
    path: '/terms-of-service',
    label: 'Terms of Service',
    icon: <DocumentTextIcon className="h-8 w-8 text-indigo-500" />,
    desc: 'Understand the rules, guidelines, and your responsibilities when using our services.'
  },
  {
    path: '/cookie-policy',
    label: 'Cookie Policy',
    icon: <CakeIcon className="h-8 w-8 text-pink-500" />,
    desc: 'See how we use cookies and similar technologies to enhance your experience.'
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 flex flex-col items-center justify-start pt-24 pb-12 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group">
            <HomeIcon className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform duration-200" />
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-4">Legal & Policy Center</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl">Welcome! Here you can find all the important legal documents that govern your use of our platform. Please review each policy to understand your rights and responsibilities as a user.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {policies.map((policy) => (
            <Link
              to={policy.path}
              key={policy.path}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-300 p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="mb-3">{policy.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">{policy.label}</h2>
              <p className="text-sm text-gray-500">{policy.desc}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center mt-8">
          <a href="mailto:support@adgorithm.com" className="flex items-center text-blue-500 hover:text-blue-700 text-base font-medium transition-colors duration-200">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
} 