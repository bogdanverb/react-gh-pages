import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation/Navigation'; // Изменили импорт с Navbar на Navigation
import Home from './pages/Home';
import PropTypes from './pages/PropTypes';  // Изменили импорт
import Pages from './pages/Pages';
import Profiles from './pages/Profiles';
import Books from './pages/Books';

function App() {
  return (
    <Router basename="/react-gh-pages">
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navigation /> {/* Заменили Navbar на Navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/proptypes" element={<PropTypes />} />  {/* Изменили компонент */}
            <Route path="/books" element={<Books />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;