import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to OctoFit Tracker</h1>
          {/* Navigation menu */}
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/leaderboard">Leaderboard</a></li>
              <li><a href="/teams">Teams</a></li>
              <li><a href="/users">Users</a></li>
              <li><a href="/workouts">Workouts</a></li>
            </ul>
          </nav>
        </header>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h1>Welcome to OctoFit Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
