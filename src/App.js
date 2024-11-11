import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NextPage from './components/NextPage';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativePaths: true,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
