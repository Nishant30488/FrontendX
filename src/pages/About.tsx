import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const subPages = [
  {
    name: 'Our Story',
    path: '/about/story',
    icon: BookOpenIcon,
    description: 'Learn about our journey and mission.'
  },
  {
    name: 'Our Team',
    path: '/about/team',
    icon: UserGroupIcon,
    description: 'Meet the people behind adgorithm.'
  },
  {
    name: 'Our Impact',
    path: '/about/impact',
    icon: ChartBarIcon,
    description: 'See how we\'re making a difference in the industry.'
  },
  {
    name: 'Global Presence',
    path: '/about/global',
    icon: GlobeAltIcon,
    description: 'Discover our worldwide reach and impact.'
  },
  {
    name: 'Innovation',
    path: '/about/innovation',
    icon: SparklesIcon,
    description: 'Explore our cutting-edge technology and solutions.'
  },
  {
    name: 'Trust & Security',
    path: '/about/security',
    icon: ShieldCheckIcon,
    description: 'Learn about our commitment to your security.'
  }
];

export default function About() {
  const location = useLocation();
  const currentPath = location.pathname;

  // If not on the main about page, show the specific subpage content
  if (currentPath !== '/about') {
    const subPage = subPages.find(page => page.path === currentPath);
    if (subPage) {
      const Icon = subPage.icon;
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {subPage.name}
                </h1>
                <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">
                  {subPage.description}
                </p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2>Our Commitment</h2>
              <p>
                At adgorithm, we're committed to revolutionizing the industry through innovative solutions and unwavering dedication to our customers' success. Our journey is defined by continuous improvement and adaptation to meet the evolving needs of our users.
              </p>
              <ul>
                <li>Industry-leading technology solutions</li>
                <li>Dedicated customer support</li>
                <li>Continuous innovation and improvement</li>
                <li>Global reach with local expertise</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }

  // Main About page content
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About adgorithm
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We're on a mission to revolutionize digital advertising through innovative AI solutions and unwavering commitment to our clients' success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {subPages.map((page) => {
          const Icon = page.icon;
          return (
            <a
              key={page.name}
              href={page.path}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col items-start space-y-4 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {page.name}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {page.description}
                </p>
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission & Values
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            At adgorithm, we believe in harnessing the power of artificial intelligence to create meaningful connections between businesses and their audiences. Our platform is built on the foundation of innovation, trust, and excellence.
          </p>
          <h3>Core Values</h3>
          <ul>
            <li><strong>Innovation:</strong> Constantly pushing the boundaries of what's possible</li>
            <li><strong>Trust:</strong> Building lasting relationships through transparency and reliability</li>
            <li><strong>Excellence:</strong> Delivering exceptional results through dedication and expertise</li>
            <li><strong>Impact:</strong> Making a positive difference in the digital advertising landscape</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 