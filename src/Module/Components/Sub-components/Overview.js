import { Box } from '@mui/material'
import React from 'react'
import DisplayCard from './Overview/Cards'
import UserData from './Overview/UserData'

const Overview = () => {
  return (
    <div>
      <Box
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        <DisplayCard />
        <UserData />
      </Box>  </div>

  )
}

export default Overview