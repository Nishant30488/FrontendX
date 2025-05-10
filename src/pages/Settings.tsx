import React from 'react';
import { 
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

export default function Settings() {
  const { user } = useAuth();

  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: UserIcon,
      description: 'Update your personal information and preferences',
      items: [
        { name: 'Name', value: user?.name || 'Not set' },
        { name: 'Email', value: user?.email || 'Not set' },
        { name: 'Bio', value: 'Click to add bio' }
      ]
    },
    {
      title: 'Notifications',
      icon: BellIcon,
      description: 'Configure how you receive notifications',
      items: [
        { name: 'Email notifications', value: 'Enabled' },
        { name: 'Push notifications', value: 'Disabled' },
        { name: 'Marketing emails', value: 'Disabled' }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: ShieldCheckIcon,
      description: 'Manage your account security and privacy preferences',
      items: [
        { name: 'Two-factor authentication', value: 'Disabled' },
        { name: 'Profile visibility', value: 'Public' },
        { name: 'Data sharing', value: 'Limited' }
      ]
    },
    {
      title: 'Language & Region',
      icon: GlobeAltIcon,
      description: 'Set your preferred language and regional settings',
      items: [
        { name: 'Language', value: 'English' },
        { name: 'Time zone', value: 'UTC-5' },
        { name: 'Date format', value: 'MM/DD/YYYY' }
      ]
    },
    {
      title: 'Account',
      icon: KeyIcon,
      description: 'Manage your account settings and preferences',
      items: [
        { name: 'Account type', value: user?.role || 'Standard' },
        { name: 'Account status', value: 'Active' },
        { name: 'Member since', value: 'January 2024' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        
        <div className="space-y-6">
          {settingsSections.map((section) => (
            <div
              key={section.title}
              className="bg-white shadow-sm rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-500">{item.name}</span>
                      <span className="text-sm font-medium text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 