import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Contact from './components/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}