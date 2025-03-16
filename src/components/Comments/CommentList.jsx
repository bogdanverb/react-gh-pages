import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {comment.author}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentList;
