import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CertificatesPage from './pages/CertificatesPage';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </div>
  );
}

export default App;