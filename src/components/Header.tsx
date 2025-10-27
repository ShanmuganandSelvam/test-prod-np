import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search, Package } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Package size={24} className="text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ShopHub</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/products" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
              Products
            </a>
            <a href="/categories" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="/deals" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Deals
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Search size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <User size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              Home
            </a>
            <a href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">
              Products
            </a>
            <a href="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              Categories
            </a>
            <a href="/deals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              Deals
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
