import * as React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import booksData from '../data/books.json';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
}

const Books: React.FC = () => {
  const { isDark } = useTheme();
  const books: Book[] = booksData.books;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`page-container max-w-4xl mx-auto py-8 px-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}
    >
      <div className="space-y-6">
        <h1 className={`text-3xl font-bold ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Бібліотека книг
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h2 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {book.title}
              </h2>
              <div className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>Автор: {book.author}</p>
                <p>Рік: {book.year}</p>
                <p>Жанр: {book.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Books;
