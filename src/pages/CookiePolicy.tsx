import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicySidebar from '../components/PolicySidebar';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gitlab-gradient">
      <div className="flex">
        <PolicySidebar />
        
        <div className="flex-1 lg:pl-0 flex justify-center items-start">
          <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 sm:text-4xl mt-4">Cookie Policy</h1>
            <p className="mt-3 text-gray-600">Last updated: March 5, 2025</p>
            
            <div className="mt-6 space-y-6">
              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-xl p-5 shadow-sm border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-orange-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-600">Types of Cookies We Use</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">We use different types of cookies for various purposes on our influencer marketing platform, including:</p>
                    <ul className="text-gray-700">
                      <li><strong>Essential Cookies:</strong> Required for the website and platform features (such as login, account security, and payment processing) to function properly.</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors and users interact with our website, campaigns, and dashboards, so we can improve our services.</li>
                      <li><strong>Functionality Cookies:</strong> Remember your preferences, such as language, theme, and saved searches, to personalize your experience.</li>
                      <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and measure the effectiveness of marketing campaigns, both on and off our platform.</li>
                      <li><strong>Performance Cookies:</strong> Monitor system performance, detect errors, and ensure a smooth user experience.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-xl p-5 shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-emerald-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-emerald-700">How to Manage Cookies</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website or platform features may become inaccessible or not function properly (e.g., login, campaign management, analytics dashboards).</p>
                    <p className="text-gray-700">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.</p>
                    <ul className="text-gray-700 mt-2">
                      <li>For more information on managing cookies in Chrome, see <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline">Google Chrome Help</a>.</li>
                      <li>For Firefox, see <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline">Mozilla Firefox Help</a>.</li>
                      <li>For Safari, see <a href="https://support.apple.com/en-us/HT201265" className="text-blue-600 hover:underline">Apple Safari Help</a>.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-purple-50 to-violet-50 rounded-xl p-5 shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-purple-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-700">Third-Party Cookies</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These third-party cookies may be set by analytics providers, advertising networks, or social media platforms.</p>
                    <p className="text-gray-700">These third-party services may include, but are not limited to:</p>
                    <ul className="text-gray-700">
                      <li>Google Analytics (for traffic and usage analysis)</li>
                      <li>Facebook Pixel (for ad targeting and conversion tracking)</li>
                      <li>LinkedIn Insights (for B2B campaign analytics)</li>
                      <li>Other advertising and analytics providers relevant to influencer marketing</li>
                    </ul>
                    <p className="text-gray-700 mt-2">We do not control these third-party cookies. Please refer to the respective privacy and cookie policies of these providers for more information on their practices and how to opt out.</p>
                  </div>
                </div>
              </section>

              <section className="policy-section">
                <div className="bg-gradient-to-br from-white via-cyan-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-cyan-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-cyan-300">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-700">Contact Us</h2>
                  <div className="mt-3 prose max-w-none">
                    <p className="text-gray-700">If you have any questions about our Cookie Policy, please contact us at:</p>
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