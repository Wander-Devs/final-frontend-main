import { Navigate } from 'react-router-dom';
import UpdateComplaint from '../pages/admin/complaints/UpdateComplaint';
import AddTip from '../pages/admin/farming-tips/AddTip';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Complaints from '../pages/admin/complaints/Complaints';
import FarmingTips from '../pages/admin/farming-tips/FarmingTips';
import Users from '../pages/admin/users/Users';
import UpdateTips from '../pages/admin/farming-tips/UpdateTips';
import ProfilePage from '../pages/profile/ProfilePage';
import EditProfilePage from '../pages/profile/EditProfilePage';

export const admin = [
  { element: <Navigate to="/admin/dashboard" />, index: true },
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/complaints', element: <Complaints /> },
  { path: '/admin/farming-tips', element: <FarmingTips /> },
  { path: '/admin/profile', element: <ProfilePage /> },
  { path: '/admin/profile/edit', element: <EditProfilePage /> },
  { path: '/admin/user-list', element: <Users /> },
  { path: '/add/tip', element: <AddTip /> },
  { path: '/edit/tip/:id', element: <UpdateTips /> },
  { path: '/edit/complaint/:id', element: <UpdateComplaint /> },
];
