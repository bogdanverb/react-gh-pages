import React, { useState, useEffect } from 'react';
import CommentForm from './Comments/CommentForm';
import CommentList from './Comments/CommentList';

const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className="space-y-6">
      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;