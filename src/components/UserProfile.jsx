import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const UserProfile = ({
  username,
  age,
  isActive,
  hobbies,
  address,
  onProfileUpdate,
  theme = 'light' // Using default parameter instead of defaultProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
        isActive ? 'border-2 border-green-500' : 'border-2 border-gray-200'
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {username}
          </h2>
          <span className={`px-3 py-1 rounded-full ${
            isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {isActive ? 'Активний' : 'Неактивний'}
          </span>
        </div>

        <div className="text-gray-600 dark:text-gray-300">
          <p>Вік: {age} років</p>
          <p>Тема: {theme}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Хобі:
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Адреса:
          </h3>
          <div className="text-gray-600 dark:text-gray-300">
            <p>{address.street}</p>
            <p>{address.city}, {address.country}</p>
          </div>
        </div>

        <button
          onClick={() => onProfileUpdate(username)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Оновити профіль
        </button>
      </div>
    </motion.div>
  );
};

// PropTypes визначення
UserProfile.propTypes = {
  // Рядок (обов'язковий)
  username: PropTypes.string.isRequired,
  
  // Число (обов'язкове)
  age: PropTypes.number.isRequired,
  
  // Булеве значення (обов'язкове)
  isActive: PropTypes.bool.isRequired,
  
  // Масив рядків (обов'язковий)
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  
  // Об'єкт з визначеною структурою (обов'язковий)
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired,
  
  // Функція (обов'язкова)
  onProfileUpdate: PropTypes.func.isRequired,
  
  // Рядок з обмеженими значеннями (необов'язковий)
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default UserProfile;