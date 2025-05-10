import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface RotatingSearchBarProps {
  userRole: 'brand' | 'influencer';
}

export default function RotatingSearchBar({ userRole }: RotatingSearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  
  const placeholder = userRole === 'brand' 
    ? "Search for influencers" 
    : "Search for brands";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
        />
      </div>
    </div>
  );
} 