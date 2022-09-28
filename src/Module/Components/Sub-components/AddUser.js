import { Grid } from '@mui/material'
import React from 'react'

const AddUser = () => {
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid>
          <Grid item md={2}><input type='text'></input></Grid>

          <Grid item md={2}><input type='text'></input>
          </Grid>
          <Grid item md={2}><button type='text'>Submit</button>
          </Grid>
        </Grid></Grid>
    </div>
  )
}

export default AddUser