import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/pages', label: 'Сторінки' },
    { path: '/profiles', label: 'Профілі' },
    { path: '/proptypes', label: 'PropTypes Demo' },
    { path: '/books', label: 'Бібліотека' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`shadow-md ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium
                  ${location.pathname === item.path
                    ? isDark 
                      ? 'text-blue-400 bg-gray-700' 
                      : 'text-blue-600 bg-blue-50'
                    : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  } rounded-md transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              isDark 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {isDark ? '🌞 Світла тема' : '🌙 Темна тема'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
