// src/components/LikeButton.jsx
import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>👍 Лайк</button>
      <p>{likes} лайків</p>
    </div>
  );
}

export default LikeButton;
