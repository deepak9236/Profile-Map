import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileList from '../pages/ProfileList';
import ProfileDetails from '../pages/ProfileDetails';
import AdminDashboard from '../pages/AdminDashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProfileList />} />
    <Route path="/profile/:id" element={<ProfileDetails />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
);

export default AppRoutes;
