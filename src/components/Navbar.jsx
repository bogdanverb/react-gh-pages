import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Home, Files, Users, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              <Home size={20} />
              <span>Главная</span>
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              <Files size={20} />
              <span>Сторінки</span>
            </NavLink>
            <NavLink
              to="/profiles"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              <Users size={20} />
              <span>Профілі</span>
            </NavLink>
            <NavLink
              to="/proptypes"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              <Code size={20} />
              <span>PropTypes Demo</span>
            </NavLink>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;