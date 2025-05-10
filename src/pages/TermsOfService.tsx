import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicySidebar from '../components/PolicySidebar';

export default function TermsOfService() {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gitlab-gradient">
      <div className="flex">
        <PolicySidebar />
        
        <div className="flex-1 lg:pl-0 flex justify-center items-start">
          <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 sm:text-4xl mt-4">Terms of Service</h1>
            <p className="mt-3 text-gray-600">Last updated: March 5, 2025</p>
            
            <div className="mt-6 space-y-6">
              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-xl p-5 shadow-sm border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-orange-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-600">Acceptance of Terms</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">By accessing and using our influencer marketing platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including brands, influencers, and visitors.</p>
                    <ul className="text-gray-700">
                      <li>You must be at least 18 years old or have legal parental/guardian consent to use our platform.</li>
                      <li>You agree to comply with all applicable laws and regulations while using our services.</li>
                      <li>We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of the revised terms.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-xl p-5 shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-emerald-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-emerald-700">User Responsibilities</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">As a user of our services, you agree to:</p>
                    <ul className="text-gray-700">
                      <li>Provide accurate, current, and complete information during registration and profile setup</li>
                      <li>Maintain the confidentiality and security of your account credentials</li>
                      <li>Promptly update your information as needed</li>
                      <li>Comply with campaign requirements and deadlines if participating as a brand or influencer</li>
                      <li>Respect the rights, privacy, and intellectual property of other users</li>
                      <li>Report any suspicious or fraudulent activity to our support team</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-purple-50 to-violet-50 rounded-xl p-5 shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-purple-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-700">Prohibited Activities</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">You may not:</p>
                    <ul className="text-gray-700">
                      <li>Use our services for illegal, harmful, or deceptive purposes</li>
                      <li>Violate any intellectual property or proprietary rights of others</li>
                      <li>Attempt to gain unauthorized access to accounts, data, or systems</li>
                      <li>Interfere with or disrupt the integrity or performance of our platform</li>
                      <li>Post or transmit any content that is abusive, harassing, defamatory, or otherwise objectionable</li>
                      <li>Engage in fraudulent activities, including fake engagement or misrepresentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-cyan-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-cyan-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-cyan-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-700">Payments & Fees</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">Our platform may facilitate payments between brands and influencers using secure escrow. By using our payment services, you agree to:</p>
                    <ul className="text-gray-700">
                      <li>Provide accurate payment and payout information</li>
                      <li>Pay any applicable fees as described on our platform</li>
                      <li>Understand that funds may be held in escrow until campaign deliverables are approved</li>
                      <li>Comply with all tax obligations related to payments received</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-cyan-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-cyan-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-cyan-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-700">Contact Us</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">If you have any questions about our Terms of Service, please contact us at:</p>
                    <p className="text-gray-700">Email: legal@adgorithm.com</p>
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