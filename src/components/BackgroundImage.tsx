import { Box } from '@mui/material'
import React from 'react'

const BackgroundImage = () => {
  return (
    <Box position={'absolute'}
         zIndex={0}
    >
      <img src='../../public/mainImage.png' 
            alt='Imagen de la propiedad'/>
    </Box>
  )
}

export default BackgroundImage