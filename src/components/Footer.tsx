import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box display={'flex'} 
        alignContent={'center'} 
        justifyContent={'center'} 
        bgcolor={'pink'} 
        height={'50px'}
        position={'fixed'}
        bottom={0}
        width={'100vw'}>
        <Typography>Made by Alan Coste</Typography>
    </Box>
  )
}

export default Footer