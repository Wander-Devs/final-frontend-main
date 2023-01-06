import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

export const adminRoutes = [
  {
    title: 'Admin Dashboard',
    path: '/admin/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Complaint Page',
    path: '/admin/complaints',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'Farming Tips',
    path: '/admin/farming-tips',
    icon: <StarIcon />,
  },
  {
    title: 'Users',
    path: '/admin/user-list',
    icon: <GroupIcon />,
  },
  {
    title: 'My Profile',
    path: '/admin/profile',
    icon: <AccountBoxIcon />,
  },
];

export const supplierRoutes = [
  {
    title: 'Supplier Dashboard',
    path: '/supplier/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'My Profile',
    path: '/supplier/profile',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'My Posted Ads',
    path: '/supplier/ads',
    icon: <CampaignIcon />,
  },
  {
    title: 'My Orders',
    path: '/supplier/orders',
    icon: <LocalMallIcon />,
  },
  {
    title: 'My Complaints',
    path: '/supplier/complaints',
    icon: <SmsFailedIcon />,
  },
];

export const farmerRoutes = [
  {
    title: 'Farmer Dashboard',
    path: '/farmer/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'My Profile',
    path: '/farmer/profile',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'My Complaints',
    path: '/farmer/complaints',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'Advertisements',
    path: '/farmer/ads',
    icon: <CampaignIcon />,
  },
  {
    title: 'My Offers/Bids',
    path: '/farmer/offers',
    icon: <ShowChartIcon />,
  },
  {
    title: 'Orders',
    path: '/farmer/orders',
    icon: <LocalMallIcon />,
  },
  {
    title: 'Trainings',
    path: '/farmer/trainings',
    icon: <ModelTrainingIcon />,
  },
];
