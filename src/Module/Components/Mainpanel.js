import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '../Containers/AppBar';
import {
  AddUser,
  Sidepanel,
  Header,
  Home,
  Dashboard,
  Projects,
  Tasks,
  Reporting,
  User
}

  from '../Components';
import DialogBox from '../Containers/Dialog';


const Mainpanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("User");
  const [open, setOpen] = useState(false)
  const [module, setModule] = useState('Add')
  const handleMoreDialog = (module) => {
    setOpen(true)
    setModule(module)
  }
  const handleCloseDialog = () => {
    setOpen(false)
  }

  const modules = {
    "Add": {
      "elm": <AddUser />,
      "title": "Add User",
      "fullScreen": false,
      "cls": "blue",
      "maxWidth": "sm"
    },
  }
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box sx={{
        height: { sx: 'auto', md: '95vh' }, borderRight: '1px solid #E8E8E8',
        px: { sx: 0, md: 2 }
      }}>
        <Sidepanel selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2'
          sx={{ mt: 1.5, color: 'black' }}
        >copyright 2022</Typography>
      </Box>

      {/* main */}
      <Box p={2} sx={{ overflowY: 'auto', flex: 2 }}>

        <Header selectedCategory={selectedCategory} moreOption={handleMoreDialog} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Reporting" element={<Reporting />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Box>

      <div id="dialog">
        <DialogBox
          open={open}
          onClose={handleCloseDialog}
          fullWidth={true}
          fullScreen={modules[module]["fullScreen"]}
          maxWidth={modules[module]["maxWidth"]}
        >
          <AppBar
            title={modules[module]["title"]}
            onClose={handleCloseDialog}
            className={modules[module]["cls"]}
          />
          {modules[module]["elm"]}
        </DialogBox>
      </div>
    </Stack>
  )
}


export default Mainpanel