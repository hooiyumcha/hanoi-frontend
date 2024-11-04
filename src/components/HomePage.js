// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Import the CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          {/* Logo text only */}
          <div className="hanoi">hanoi</div>
        </div>
        <div className="user-info">
          {/* Username text only */}
          <div className="username">Chief Choctaw</div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="secondary-header">
        <nav className="secondary-nav">
          <ul className="secondary-nav-list">
            <li><Link to="/" className="secondary-nav-item">Home</Link></li>
            <li><Link to="/assets" className="secondary-nav-item">Assets</Link></li>
            <li><a href="#" className="secondary-nav-item">Debts</a></li>
            <li><a href="#" className="secondary-nav-item">Documents</a></li>
          </ul>
        </nav>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: '60%' }}></div>
      </div>

      {/* Upcoming Tasks Section */}
      <div className="upcoming-tasks task-container">
        <h2>Upcoming Tasks</h2>
        <div className="upcoming-task-button">Open an estate bank account <span className="task-date">7/12/25</span></div>
        <div className="upcoming-task-button">Pay debts and taxes <span className="task-date">7/12/25</span></div>
        <div className="upcoming-task-button">File final tax returns <span className="task-date">7/12/25</span></div>
        <div className="upcoming-task-button">Distribute assets to beneficiaries <span className="task-date">7/12/25</span></div>
      </div>

      {/* Recently Completed Section */}
      <div className="recently-completed task-container">
        <h2>Recently Completed</h2>
        <div className="completed-task-button">Obtain death certificate copies <span className="completion-date">Completed 7/12/25</span></div>
        <div className="completed-task-button">Notify beneficiaries and creditors <span className="completion-date">Completed 7/12/25</span></div>
        <div className="completed-task-button">Create an estate inventory <span className="completion-date">Completed 7/12/25</span></div>
        <div className="completed-task-button">Locate the will (if any) <span className="completion-date">Completed 7/12/25</span></div>
        <div className="completed-task-button">Get appointed as executor/administrator <span className="completion-date">Completed 7/12/25</span></div>
      </div>
    </div>
  );
}

export default HomePage;
