import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) return;

    onSubmit({
      id: Date.now(),
      text,
      author,
      date: new Date().toISOString()
    });

    setText('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Comment
        </label>
        <textarea
          id="comment"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Write your comment here..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Post comment
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CommentForm;
