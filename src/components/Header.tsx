import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
    <Typography 
    variant='h1' 
    marginBottom={'30px'} 
    fontSize={'10vw'} >
      IberiViaje
  </Typography>
  </Box>
  )
}

export default Header