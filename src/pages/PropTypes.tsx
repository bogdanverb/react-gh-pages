import * as React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PropTypeEditor from '../components/PropTypes/PropTypeEditor';

const PropTypes: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`page-container max-w-4xl mx-auto py-8 px-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}
    >
      <div className={`bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-t-xl ${
        isDark ? 'bg-opacity-80' : ''
      }`}>
        <h1 className="text-4xl font-bold text-white mb-2">PropTypes Editor</h1>
        <p className="text-blue-100">Редактор властивостей з типізацією</p>
      </div>
      
      <div className={`p-8 rounded-b-xl min-h-[600px] ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <PropTypeEditor />
      </div>
    </motion.div>
  );
};

export default PropTypes;
