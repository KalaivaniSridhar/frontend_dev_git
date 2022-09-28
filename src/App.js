import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Mainpanel, User } from './Module/Components';
import Login from './Module/Components/Login';

function App() {
  return (
    <div>
      <Routes>  
      <Route exact path="/login" element={<Login />}/>
      <Route path="/*" element={<Mainpanel />}/>
      <Route path="/" element={ <Navigate to="/login" /> } />
      </Routes>
    </div>
  );
}

export default App;
