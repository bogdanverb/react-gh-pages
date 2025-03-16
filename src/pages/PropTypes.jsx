import React from 'react';
import { motion } from 'framer-motion';
import PropTypeEditor from '../components/PropTypes/PropTypeEditor';

const PropTypes = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container max-w-5xl mx-auto py-8 px-4"
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-t-xl">
        <h1 className="text-4xl font-bold text-white mb-2">PropTypes Editor</h1>
        <p className="text-blue-100">Создавайте и управляйте типами свойств для ваших компонентов</p>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-b-xl min-h-[600px]">
        <PropTypeEditor />
      </div>
    </motion.div>
  );
};

export default PropTypes;
