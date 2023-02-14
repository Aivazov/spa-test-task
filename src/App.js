import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
// import Card from './components/Card/Card';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article/:idx" element={<Article />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
