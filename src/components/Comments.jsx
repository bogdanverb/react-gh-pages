import React from 'react';

// Компонент для відображення одного коментаря
const Comment = ({ author, time, text }) => {
  return (
    <div className="comment">
      <div className="author">{author}</div>
      <div className="time">{time}</div>
      <div className="text">{text}</div>
      
      {/* Кнопки "Like" і "Share" під коментарем */}
      <div className="comment-actions">
        <button className="like-button">Like</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
};

// Головний компонент коментарів
const Comments = () => {
  // Дані коментарів
  const commentsData = [
    {
      id: 1,
      author: 'Іван',
      time: '2025-02-26 14:30',
      text: 'Текст коментаря 1!'
    },
    {
      id: 2,
      author: 'Анна',
      time: '2025-02-26 14:35',
      text: 'Текст коментаря 2!'
    },
    {
      id: 3,
      author: 'Сергій',
      time: '2025-02-26 14:40',
      text: 'Текст коментаря 3!'
    },
    {
      id: 4,
      author: 'Марія',
      time: '2025-02-26 14:45',
      text: 'Текст коментаря 4!'
    },
    {
      id: 5,
      author: 'Олексій',
      time: '2025-02-26 14:50',
      text: 'Текст коментаря 5!'
    }
  ];

  return (
    <div className="comments">
      <h2>Коментарі</h2>
      {commentsData.map((comment) => (
        <Comment 
          key={comment.id}
          author={comment.author}
          time={comment.time}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default Comments;
