import { Fragment, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon, 
  UserCircleIcon, 
  ArrowRightOnRectangleIcon, 
  UserIcon, 
  EnvelopeIcon, 
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const [clickedFeature, setClickedFeature] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchingMessage, setShowSearchingMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset clicked feature when dropdown closes
  const handleFeatureClose = () => {
    setTimeout(() => {
      setClickedFeature(null);
    }, 200);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchingMessage(true);
      // Clear the message after 3 seconds
      setTimeout(() => {
        setShowSearchingMessage(false);
      }, 3000);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed w-full top-0 z-50">
      <div className={`w-full mx-auto rounded-none bg-white/95 shadow-md shadow-gray-200/50 border-b border-gray-100 backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg`}>
        <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
            <div className="px-4">
              <div className="flex h-14 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 ml-1">
                  <Link to="/" className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-primary-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110">
                  adgorithm
                </Link>
              </div>

              {/* Search Bar */}
              <div className="hidden md:block flex-1 max-w-md mx-8">
                <form onSubmit={handleSearch} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search influencers..."
                    className="w-full pl-9 pr-3 py-1.5 bg-gray-100 border border-transparent rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:scale-105"
                  />
                  {showSearchingMessage && (
                    <div className="absolute mt-1 w-full rounded-lg bg-white shadow-lg py-2 px-3 border border-gray-200 z-10">
                      <div className="flex items-center space-x-2">
                        <SparklesIcon className="h-4 w-4 text-primary-500" aria-hidden="true" />
                        <p className="text-sm text-gray-700">
                          We are currently working on this feature. Thanks for your patience!
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-3 mr-1">
                  {/* Features dropdown */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-primary-600' : 'text-gray-700',
                            'group inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-100/70 hover:text-primary-600 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary-500 hover:scale-105'
                        )}
                      >
                        <span>Features</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-primary-600 rotate-180' : 'text-gray-500',
                            'ml-1 h-4 w-4 transition-transform duration-200 group-hover:text-primary-600'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        afterLeave={handleFeatureClose}
                      >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-sm -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                              <div className="relative bg-card/95 backdrop-blur-sm p-3">
                              <div className="grid grid-cols-1 gap-2">
                                
                                {/* Feature buttons */}
                                    {['AI-Powered Matching', 'Direct Message Communication', 'Secure Escrow Payments', 'Real-time Analytics', 'Fraud Detection'].map((feature) => (
                                  <div key={feature}>
                                    {clickedFeature === feature ? (
                                        <div className="px-3 py-2 rounded-xl bg-white shadow-sm border border-primary-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                                              <SparklesIcon className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
                                          </div>
                                          <div className="flex-1">
                                            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Coming Soon</p>
                                            <p className="text-xs text-gray-500">Currently we are working on it. Thanks for your patience!</p>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <Popover.Button
                                        as="button"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setClickedFeature(feature);
                                        }}
                                          className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-200 border border-gray-100 hover:scale-[1.02] group"
                                      >
                                        <div className="flex items-center space-x-2">
                                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                                            <SparklesIcon className="h-3 w-3 text-primary-600" aria-hidden="true" />
                                          </div>
                                          <span className="text-sm font-medium text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-600">{feature}</span>
                                        </div>
                                      </Popover.Button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* Resources dropdown */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-primary-600' : 'text-gray-700',
                            'group inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-100/70 hover:text-primary-600 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary-500 hover:scale-105'
                        )}
                      >
                        <span>Resources</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-primary-600 rotate-180' : 'text-gray-500',
                            'ml-1 h-4 w-4 transition-transform duration-200 group-hover:text-primary-600'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                              <div className="relative bg-card/95 backdrop-blur-sm px-4 py-5">
                                <div className="flex items-center justify-center p-4 text-center border border-primary-200/30 rounded-xl bg-gradient-to-r from-primary-50/30 to-blue-50/30">
                                <div className="space-y-2">
                                    <SparklesIcon className="h-5 w-5 text-primary-500 mx-auto" />
                                  <h3 className="text-sm font-medium text-primary-600">Coming Soon</h3>
                                  <p className="text-xs text-gray-500">Currently we are working on it. Thanks for your patience!</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* About Us link */}
                <Link
                  to="/about"
                    className="text-sm font-medium text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-100/70 hover:text-primary-600 transition-all duration-200 hover:scale-105"
                >
                  About Us
                </Link>

                {/* Desktop Question mark button for Policies */}
                <Link
                  to="/policies"
                  className="relative rounded-full w-7 h-7 flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
                  aria-label="Policies"
                >
                    <QuestionMarkCircleIcon className="h-4 w-4" aria-hidden="true" />
                </Link>

                {user ? (
                    <Menu as="div" className="relative ml-2">
                    <div>
                        <Menu.Button className="flex rounded-full bg-card text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                        <span className="sr-only">Open user menu</span>
                        {user.avatar ? (
                          <img
                              className="h-7 w-7 rounded-full ring-1 ring-primary-500/30 object-cover"
                            src={user.avatar}
                            alt=""
                          />
                        ) : (
                            <div className="h-7 w-7 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white ring-1 ring-primary-500/30">
                              <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-2xl bg-card py-1 shadow-xl ring-1 ring-black/5 focus:outline-none">
                        <div className="px-4 py-4 border-b border-gray-200">
                          <div className="flex items-center">
                            {user.avatar ? (
                              <img
                                className="h-12 w-12 rounded-full ring-2 ring-primary-500/30 object-cover"
                                src={user.avatar}
                                alt=""
                              />
                            ) : (
                              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white ring-2 ring-primary-500/30">
                                <UserCircleIcon className="h-10 w-10" aria-hidden="true" />
                              </div>
                            )}
                            <div className="ml-3">
                              <p className="text-base font-semibold text-foreground">
                                {user.name || 'User'}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <EnvelopeIcon className="mr-1 h-3.5 w-3.5" />
                                {user.email || 'user@example.com'}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-3 grid grid-cols-2 gap-2">
                              <div className="text-xs flex flex-col items-center justify-center rounded-xl bg-gray-100 p-2">
                              <span className="text-gray-500">Role</span>
                              <span className="font-medium text-foreground">{user.role || 'Member'}</span>
                            </div>
                              <div className="text-xs flex flex-col items-center justify-center rounded-xl bg-gray-100 p-2">
                              <span className="text-gray-500">Status</span>
                              <span className="font-medium text-green-600">Active</span>
                            </div>
                          </div>
                        </div>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? 'bg-gray-100 text-primary-600' : 'text-foreground',
                                'flex px-4 py-3 text-sm transition-colors duration-150 hover:scale-[1.02] transform'
                              )}
                            >
                              <UserIcon className="mr-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                              <span>Your Profile</span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings"
                              className="flex items-center px-3 py-1.5 rounded-full text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-primary-600 hover:scale-[1.02] transition-all duration-200"
                            >
                              <AdjustmentsHorizontalIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                              <span>Settings</span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={classNames(
                                active ? 'bg-gray-100 text-primary-600' : 'text-foreground',
                                'flex w-full px-4 py-3 text-sm text-left transition-colors duration-150 hover:scale-[1.02] transform'
                              )}
                            >
                              <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                              <span>Sign out</span>
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                    <div className="flex space-x-2 ml-2">
                    <Link
                      to="/login"
                        className="text-sm font-medium text-gray-700 px-3.5 py-1.5 rounded-full border border-gray-300/80 hover:bg-gray-50 hover:text-primary-600 hover:border-primary-500 transition-all duration-200 hover:scale-105"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/register"
                        className="text-sm font-medium bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:from-primary-500 hover:to-blue-500 px-4 py-1.5 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:scale-110 transform"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
                <div className="flex md:hidden items-center space-x-1.5">
                {/* Mobile Search Button */}
                <button
                  type="button"
                  onClick={() => {
                    setShowSearchingMessage(true);
                    setTimeout(() => {
                      setShowSearchingMessage(false);
                    }, 3000);
                  }}
                  className="rounded-full p-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 hover:scale-110 transition-transform duration-200"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {showSearchingMessage && (
                  <div className="absolute mt-10 right-12 w-64 rounded-lg bg-white shadow-lg py-2 px-3 border border-gray-200 z-50">
                    <div className="flex items-center space-x-2">
                      <SparklesIcon className="h-4 w-4 text-primary-500" aria-hidden="true" />
                      <p className="text-sm text-gray-700">
                        We are currently working on this feature. Thanks for your patience!
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Mobile Question mark button */}
                <Link
                  to="/policies"
                  className="relative rounded-full w-7 h-7 flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 shadow-sm transition-all duration-300 hover:scale-105 focus:outline-none"
                  aria-label="Policies"
                >
                    <QuestionMarkCircleIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
                
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-500 hover:scale-110 transition-transform duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                      <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            {/* Mobile navigation links */}
              <div className="border-t border-gray-200 pt-3 pb-2 px-4">
                <div className="space-y-1">
                <Disclosure.Button
                  as="div"
                    className="flex justify-between items-center px-3 py-1.5 rounded-full text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all duration-200"
                >
                  <span>Features</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </Disclosure.Button>
                  <div className="ml-4 px-2 py-2">
                    <div className="space-y-1.5 mb-2">
                    {/* Feature buttons for mobile */}
                        {['AI-Powered Matching', 'Direct Message Communication', 'Secure Escrow Payments', 'Real-time Analytics', 'Fraud Detection'].map((feature) => (
                      <div key={feature}>
                        {clickedFeature === feature ? (
                            <div className="px-3 py-2 rounded-xl bg-white shadow-sm border border-primary-200">
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                                  <SparklesIcon className="h-2.5 w-2.5 text-primary-500" aria-hidden="true" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Coming Soon</p>
                                <p className="text-xs text-gray-500">Currently we are working on it. Thanks for your patience!</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <button
                            key={feature}
                            onClick={() => setClickedFeature(feature)}
                              className="w-full text-left px-3 py-1.5 rounded-xl bg-white hover:bg-gray-50 shadow-sm transition-all duration-200 border border-gray-100 hover:scale-[1.01] group"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                                  <SparklesIcon className="h-2.5 w-2.5 text-primary-600" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-medium text-gray-900">{feature}</span>
                            </div>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Disclosure.Button
                  as="div"
                    className="flex justify-between items-center px-3 py-1.5 rounded-full text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all duration-200"
                >
                  <span>Resources</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </Disclosure.Button>
                  <div className="ml-4 px-2 py-2">
                  <div className="p-3 text-center border border-primary-200/30 rounded-xl bg-gradient-to-r from-primary-50/30 to-blue-50/30">
                    <div className="space-y-1">
                        <SparklesIcon className="h-4 w-4 text-primary-500 mx-auto" />
                      <h3 className="text-sm font-medium text-primary-600">Coming Soon</h3>
                      <p className="text-xs text-gray-500">Currently we are working on it. Thanks for your patience!</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                    className="block px-3 py-1.5 rounded-full text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Mobile user menu or login buttons */}
            {user ? (
                <div className="border-t border-gray-200 pb-2 pt-3 px-4">
                  <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {user.avatar ? (
                      <img
                          className="h-9 w-9 rounded-full ring-1 ring-primary-500/30 object-cover"
                        src={user.avatar}
                        alt=""
                      />
                    ) : (
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white ring-1 ring-primary-500/30">
                          <UserCircleIcon className="h-7 w-7" aria-hidden="true" />
                        </div>
                    )}
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-foreground">
                      {user.name || 'User'}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email || 'user@example.com'}
                    </div>
                  </div>
                </div>
                  <div className="mt-3 space-y-1 px-2">
                  <Link
                    to="/profile"
                      className="flex items-center px-3 py-1.5 rounded-full text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 hover:scale-[1.02] transition-all duration-200"
                  >
                    <UserIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                      className="flex items-center px-3 py-1.5 rounded-full text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-primary-600 hover:scale-[1.02] transition-all duration-200"
                  >
                    <AdjustmentsHorizontalIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                      className="flex w-full items-center px-3 py-1.5 rounded-full text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 hover:scale-[1.02] transition-all duration-200"
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
                <div className="border-t border-gray-200 pb-2 pt-3 px-4">
                  <div className="flex flex-col space-y-2">
                  <Link
                    to="/login"
                      className="w-full text-center px-3 py-1.5 text-base font-medium text-gray-700 border border-gray-300/80 rounded-full hover:bg-gray-50 hover:text-primary-600 hover:border-primary-500 transition-all duration-200 hover:scale-105"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                      className="w-full text-center px-3 py-1.5 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 rounded-full shadow-sm hover:shadow hover:scale-[1.02] transition-all duration-200"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      </div>
    </div>
  );
} 