import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  BookOpenIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const location = useLocation();
  const currentPath = location.pathname;

  const subPages = [
    {
      title: 'Our Story',
      description: 'Learn about our journey and mission',
      icon: BookOpenIcon,
      path: '/about/story'
    },
    {
      title: 'Our Team',
      description: 'Meet the people behind adgorithm',
      icon: UserGroupIcon,
      path: '/about/team'
    },
    {
      title: 'Our Impact',
      description: 'See how we are making a difference',
      icon: ChartBarIcon,
      path: '/about/impact'
    },
    {
      title: 'Global Reach',
      description: 'Discover our worldwide presence',
      icon: GlobeAltIcon,
      path: '/about/global'
    },
    {
      title: 'Innovation',
      description: 'Explore our cutting-edge technology',
      icon: LightBulbIcon,
      path: '/about/innovation'
    },
    {
      title: 'Security',
      description: 'Learn about our security measures',
      icon: ShieldCheckIcon,
      path: '/about/security'
    }
  ];

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
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {subPage.title}
                </h1>
                <p className="mt-1 text-lg text-gray-500">
                  {subPage.description}
                </p>
              </div>
            </div>

            <div className="prose max-w-none">
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
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center">
        <SparklesIcon className="h-12 w-12 text-blue-400 mb-4 animate-pulse" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Currently we are working on it</h1>
        <p className="text-gray-600 text-center max-w-md">Thanks for your patience!</p>
      </div>
    </div>
  );
} 