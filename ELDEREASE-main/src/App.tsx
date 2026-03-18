import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';

import ElderHome from './pages/elder/ElderHome';
import MedicinesPage from './pages/elder/MedicinesPage';
import ProfilePage from './pages/elder/ProfilePage';
import Help from './pages/elder/Help';
import Payment from './pages/elder/Payment';
import Bookings from './pages/elder/Bookings';
import Safety from './pages/elder/Safety';
import Refer from './pages/elder/Refer';
import Rewards from './pages/elder/Rewards';
import Membership from './pages/elder/Membership';
import GroceriesPage from './pages/elder/GroceriesPage';
import TransportPage from './pages/elder/TransportPage';
import CallSupportPage from './pages/elder/CallSupportPage';
import HouseHelpPage from './pages/elder/HouseHelpPage';
import FamilySupport from './pages/elder/familysupport';

import AdminLayout from './pages/admin/components/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHelpCenter from './pages/admin/AdminHelpCenter';
import VolunteerApp from './pages/volunteer/VolunteerApp';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/elder" element={<ElderHome />} />
        <Route path="/elder/profile" element={<ProfilePage />} />
        <Route path="/elder/medicines" element={<MedicinesPage />} />
        <Route path="/elder/help" element={<Help />} />
        <Route path="/elder/payment" element={<Payment />} />
        <Route path="/elder/bookings" element={<Bookings />} />
        <Route path="/elder/safety" element={<Safety />} />
        <Route path="/elder/refer" element={<Refer />} />
        <Route path="/elder/rewards" element={<Rewards />} />
        <Route path="/elder/membership" element={<Membership />} />
        <Route path="/elder/groceries" element={<GroceriesPage />} />
        <Route path="/elder/transport" element={<TransportPage />} />
        <Route path="/elder/call-support" element={<CallSupportPage />} />
        <Route path="/elder/house-help" element={<HouseHelpPage />} />
        <Route path="/elder/family" element={<FamilySupport />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="jobs" element={<AdminDashboard />} />
          <Route path="volunteers" element={<div className="p-6"><h2>Volunteer Management (Coming Soon)</h2></div>} />
          <Route path="support" element={<AdminHelpCenter />} />
        </Route>

        <Route path="/volunteer/*" element={<VolunteerApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
