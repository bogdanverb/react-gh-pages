import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ username, age, isActive, address }) => {
  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Имя: {username}</p>
      <p>Возраст: {age}</p>
      <p>Активен: {isActive ? 'Да' : 'Нет'}</p>
      <p>Адрес: {address.street}, {address.city}, {address.country}</p>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

const PropTypesDemo = () => {
  const user = {
    username: 'Марія Шевченко',
    age: 28,
    isActive: true,
    address: {
      street: 'вул. Хрещатик, 1',
      city: 'Київ',
      country: 'Україна',
    },
  };

  return <UserProfile {...user} />;
};

export default PropTypesDemo;