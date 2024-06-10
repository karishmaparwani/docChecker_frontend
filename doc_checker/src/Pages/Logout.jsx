import { Typography, Box } from '@mui/material'
import React from 'react'

function Logout() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' 
      }}
    >
      <Typography variant='h5' >
        You have successfully logged out!!!
      </Typography>
    </Box>

  )
}

export default Logout