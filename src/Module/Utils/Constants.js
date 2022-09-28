import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const categories = [
  { name: 'Home', icon: <OtherHousesOutlinedIcon />, route: '/Home' },
  { name: 'Dashboard', icon: <LaunchOutlinedIcon />, route: '/Dashboard' },
  { name: 'Projects', icon: <DynamicFeedOutlinedIcon />, route: '/Projects' },
  { name: 'Tasks', icon: <LibraryAddCheckOutlinedIcon />, route: '/Tasks' },
  { name: 'Reporting', icon: <PieChartOutlineOutlinedIcon />, route: '/Reporting' },
  { name: 'User', icon: <AccountCircleIcon />, route: '/User' },

];

export const Navbar =
  [

    { name: "Logout", icon: <LogoutIcon /> },
    { name: 'Add user', icon: <AddOutlinedIcon /> },
    { name: "Import", icon: <CloudUploadOutlinedIcon /> }
  ];


export const Cards = [
  {
    Title: "Total customers", count: 2420, percent: 20
  },
  {
    Title: "Members", count: 1210, percent: 15
  },
  {
    Title: "Active now", count: 316
  }

]