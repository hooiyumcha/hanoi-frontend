// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './components/HomePage';
import AssetList from './components/AssetList';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import DebtList from './components/DebtList';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/assets" element={<AssetList />} />
            <Route path="/debts" element={<DebtList />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />

          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
