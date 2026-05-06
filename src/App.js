import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';
import DashboardPage from './pages/DashboardPage';
import ImpactPage from './pages/ImpactPage';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/impact" element={<ImpactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
