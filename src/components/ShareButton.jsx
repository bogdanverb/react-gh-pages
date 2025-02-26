// src/components/ShareButton.jsx
import React from 'react';

function ShareButton() {
  const handleShare = () => {
    alert('Поділилися!');
  };

  return <button onClick={handleShare}>Поділитися</button>;
}

export default ShareButton;
