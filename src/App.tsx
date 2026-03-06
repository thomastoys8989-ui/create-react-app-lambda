// Wrote by ThomasConway
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Studio from './pages/Studio';
import Scripting from './pages/Scripting';
import Publishing from './pages/Publishing';
import API from './pages/API';
import Examples from './pages/Examples';

function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="logo">📚 PrinterMake Dev</div>
      <nav className="nav">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/getting-started" className={`nav-link ${isActive('/getting-started') ? 'active' : ''}`}>Getting Started</Link>
        <Link to="/studio" className={`nav-link ${isActive('/studio') ? 'active' : ''}`}>Studio Editor</Link>
        <Link to="/scripting" className={`nav-link ${isActive('/scripting') ? 'active' : ''}`}>Scripting</Link>
        <Link to="/publishing" className={`nav-link ${isActive('/publishing') ? 'active' : ''}`}>Publishing</Link>
        <Link to="/api" className={`nav-link ${isActive('/api') ? 'active' : ''}`}>API Reference</Link>
        <Link to="/examples" className={`nav-link ${isActive('/examples') ? 'active' : ''}`}>Examples</Link>
      </nav>
    </aside>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/scripting" element={<Scripting />} />
            <Route path="/publishing" element={<Publishing />} />
            <Route path="/api" element={<API />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
