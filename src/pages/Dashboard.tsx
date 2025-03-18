import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface Campaign {
  id: string;
  title: string;
  status: 'active' | 'pending' | 'completed';
  budget: number;
  deadline: string;
  applicants: number;
}

interface Message {
  id: string;
  sender: string;
  preview: string;
  timestamp: string;
  unread: boolean;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'messages'>('overview');

  // Mock data - replace with actual API calls
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Summer Collection Launch',
      status: 'active',
      budget: 5000,
      deadline: '2024-06-30',
      applicants: 12,
    },
    {
      id: '2',
      title: 'Product Review Campaign',
      status: 'pending',
      budget: 2000,
      deadline: '2024-07-15',
      applicants: 5,
    },
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Sarah Johnson',
      preview: 'Hi, I would love to collaborate on your summer collection...',
      timestamp: '2h ago',
      unread: true,
    },
    {
      id: '2',
      sender: 'Mike Chen',
      preview: 'Thank you for your interest in our campaign...',
      timestamp: '1d ago',
      unread: false,
    },
  ];

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-full">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {(['overview', 'campaigns', 'messages'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                      ${activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }
                    `}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab content */}
            <div className="mt-8">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Stats cards */}
                  <div className="card">
                    <h3 className="text-sm font-medium text-gray-500">Active Campaigns</h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">2</p>
                  </div>
                  <div className="card">
                    <h3 className="text-sm font-medium text-gray-500">Total Budget</h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">$7,000</p>
                  </div>
                  <div className="card">
                    <h3 className="text-sm font-medium text-gray-500">New Messages</h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
                  </div>
                  <div className="card">
                    <h3 className="text-sm font-medium text-gray-500">Total Applicants</h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">17</p>
                  </div>
                </div>
              )}

              {activeTab === 'campaigns' && (
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <li key={campaign.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <h3 className="text-sm font-medium text-primary-600 truncate">
                                {campaign.title}
                              </h3>
                              <span className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                {campaign.status}
                              </span>
                            </div>
                            <div className="ml-2 flex flex-shrink-0">
                              <p className="text-sm text-gray-500">
                                Budget: ${campaign.budget}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                {campaign.applicants} applicants
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <button className="text-primary-600 hover:text-primary-500">
                                View details →
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {messages.map((message) => (
                      <li key={message.id} className="hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className={`text-sm font-medium ${message.unread ? 'text-gray-900' : 'text-gray-500'}`}>
                                {message.sender}
                              </p>
                              {message.unread && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                                  New
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{message.timestamp}</p>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">{message.preview}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 