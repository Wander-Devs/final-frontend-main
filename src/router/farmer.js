import { Navigate } from 'react-router-dom';
import FarmingTips from '../pages/farmer/farming-tips/FarmingTips';
import Advertisements from '../pages/farmer/advertisements/AdvertisementsPage';
import FarmerComplaints from '../pages/farmer/complaints/FarmerComplaintsPage';
import FarmerCrops from '../pages/farmer/crops/FarmerCrops';
import FarmerDashboard from '../pages/farmer/dashboard/FarmerDashboard';
import FarmerOffers from '../pages/farmer/offers/FarmerOffers';
import CropOrders from '../pages/farmer/orders/CropOrders';
import FarmerTrainings from '../pages/farmer/training/FarmerTrainings';
import FarmerAddComplaintPage from '../pages/farmer/complaints/FarmerAddComplaintPage';
import FarmerEditComplaintPage from '../pages/farmer/complaints/FarmerEditComplaintPage';
// import OfferForm from '../components/post-offer/OfferForm';
import ProfilePage from '../pages/profile/ProfilePage';
import EditProfilePage from '../pages/profile/EditProfilePage';

export const farmer = [
  { element: <Navigate to="/farmer/dashboard" />, index: true },
  { path: 'farmer/dashboard', element: <FarmerDashboard /> },
  { path: 'farmer/crops', element: <FarmerCrops /> },
  { path: 'farmer/complaints', element: <FarmerComplaints /> },
  { path: 'farmer/complaints/add', element: <FarmerAddComplaintPage /> },
  { path: 'farmer/complaints/edit/:id', element: <FarmerEditComplaintPage /> },
  { path: 'farmer/offers', element: <FarmerOffers /> },
  { path: 'farmer/ads', element: <Advertisements /> },
  { path: 'farmer/tips', element: <FarmingTips /> },
  { path: 'farmer/orders', element: <CropOrders /> },
  { path: 'farmer/profile', element: <ProfilePage /> },
  { path: 'farmer/profile/edit', element: <EditProfilePage /> },
  { path: 'farmer/trainings', element: <FarmerTrainings /> },
  // { path: 'farmer/ads/edit/:id', element: <OfferForm /> },
];
