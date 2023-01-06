import React from 'react';
import { Navigate } from 'react-router-dom';
import SupplierDashboard from '../pages/supplier/dashboard/SupplierDashboard';
import SupplierAdvertisements from '../pages/supplier/advertisements/SupplierAdvertisementsPage';
import SupplierOrders from '../pages/supplier/orders/SupplierOrders';
import SupplierComplaints from '../pages/supplier/complaints/SupplierComplaintsPage';
import SupplierAddComplaintPage from '../pages/supplier/complaints/SupplierAddComplaintPage';
import SupplierEditComplaintPage from '../pages/supplier/complaints/SupplierEditComplaintPage';
import SupplierOffersList from '../pages/supplier/offers/SupplierOffersList';
import SupplierAdOffers from '../pages/supplier/offers/SupplierAdOffers';
import AdsOffer from '../pages/supplier/advertisements/Offers';
import ProfilePage from '../pages/profile/ProfilePage';
import EditProfilePage from '../pages/profile/EditProfilePage';
import SupplierPostAdPage from '../pages/supplier/advertisements/SupplierPostAdPage';
import SupplierEditAdPage from '../pages/supplier/advertisements/SupplierEditAdPage';

export const supplier = [
  { element: <Navigate to="/supplier/dashboard" />, index: true },
  { path: 'supplier/dashboard', element: <SupplierDashboard /> },
  { path: 'supplier/profile', element: <ProfilePage /> },
  { path: 'supplier/profile/edit', element: <EditProfilePage /> },
  { path: 'supplier/ads', element: <SupplierAdvertisements /> },
  { path: 'supplier/ads/add', element: <SupplierPostAdPage /> },
  { path: 'supplier/ads/edit/:id', element: <SupplierEditAdPage /> },
  { path: 'supplier/orders', element: <SupplierOrders /> },
  { path: 'supplier/complaints', element: <SupplierComplaints /> },
  { path: 'supplier/complaints/add', element: <SupplierAddComplaintPage /> },
  { path: 'supplier/complaints/edit/:id', element: <SupplierEditComplaintPage /> },
  { path: 'supplier/offers', element: <SupplierOffersList /> },
  { path: 'supplier/ad-offers/:id', element: <SupplierAdOffers /> },
  { path: 'offers/:id', element: <AdsOffer /> },
];
