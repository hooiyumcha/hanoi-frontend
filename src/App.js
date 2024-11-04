// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AssetList from './components/AssetList';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/assets">Assets</Link>
        </nav>
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assets" element={<AssetList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
