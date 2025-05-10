import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PolicySidebar from '../components/PolicySidebar';

const policyLinks = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
  { path: '/cookie-policy', label: 'Cookie Policy' },
];

export default function PrivacyPolicy() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-gitlab-gradient">
      <div className="flex">
        {/* Mobile Policy Nav */}
        <div className="block lg:hidden w-full px-4 pt-6 pb-2">
          <nav className="flex justify-center gap-2">
            {policyLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                  ${currentPath === link.path ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-300' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Sidebar for desktop */}
        <PolicySidebar />
        <div className="flex-1 lg:pl-0 flex justify-center items-start">
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-16 pb-12">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 sm:text-4xl mt-4">Privacy Policy</h1>
            <p className="mt-3 text-gray-600">Last updated: March 5, 2025</p>
          
          <div className="mt-6 space-y-6">
            <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-xl p-5 shadow-sm border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-orange-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-600">Information We Collect</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">We collect several types of information from and about users of our influencer marketing platform, including but not limited to:</p>
                    <ul className="text-gray-700">
                      <li>Personal information (name, email address, phone number, social media handles)</li>
                      <li>Account information (username, password, account preferences)</li>
                      <li>Profile information (bio, profile picture, audience demographics, interests, portfolio, campaign history)</li>
                      <li>Usage data (how you interact with our website, campaign participation, messages sent and received, analytics data)</li>
                      <li>Payment and transaction information (bank details, payment history, invoices, payout preferences)</li>
                      <li>Device and technical information (IP address, browser type, device identifiers, cookies, and similar technologies)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-xl p-5 shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-emerald-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-emerald-700">How We Use Your Information</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">We use the information we collect to:</p>
                    <ul className="text-gray-700">
                      <li>Provide, operate, and maintain our influencer marketing services</li>
                      <li>Match brands and influencers using AI algorithms based on profile and campaign data</li>
                      <li>Facilitate secure communication and collaboration between users</li>
                      <li>Process payments, manage escrow, and ensure secure transactions</li>
                      <li>Send notifications, updates, and marketing communications</li>
                      <li>Analyze usage to improve our platform, develop new features, and enhance user experience</li>
                      <li>Detect and prevent fraud, abuse, and security incidents</li>
                      <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-purple-50 to-violet-50 rounded-xl p-5 shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-purple-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-700">Information Sharing</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">We may share your information with:</p>
                    <ul className="text-gray-700">
                      <li>Service providers who assist in our operations (e.g., payment processors, analytics providers, cloud hosting)</li>
                      <li>Business partners and brands, but only with your consent or as part of campaign participation</li>
                      <li>Other users, when you participate in campaigns, send messages, or interact on the platform</li>
                      <li>Law enforcement, regulators, or other parties when required by law or to protect our rights and users</li>
                      <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-cyan-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-cyan-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-cyan-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-700">Your Rights & Choices</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">You have the right to:</p>
                    <ul className="text-gray-700">
                      <li>Access, update, or delete your personal information at any time via your account settings</li>
                      <li>Opt out of marketing communications by following the unsubscribe instructions in our emails</li>
                      <li>Request data portability or restriction of processing in accordance with applicable laws</li>
                      <li>Contact us for any privacy-related requests or questions</li>
                  </ul>
                  </div>
              </div>
            </section>

            <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-cyan-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-cyan-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-cyan-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-700">Contact Us</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">If you have any questions about our Privacy Policy, please contact us at:</p>
                    <p className="text-gray-700">Email: privacy@adgorithm.com</p>
                    <p className="text-gray-700">Address: 123 Innovation Way, Tech City, TC 12345, United States</p>
                  </div>
                </div>
              </section>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
} 