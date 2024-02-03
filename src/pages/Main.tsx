import { Button, IconButton, Input, Typography } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Main = () => {
  return (
    <>
      <Typography variant='h2'>Siéntete en tu casa allá donde te lleve tu trabajo</Typography>
      <Typography variant='body1'>
        echale un vistazo al video para viajes de trabajo 
         <IconButton aria-label='Ver video'> <ArrowRightIcon/> </IconButton>
      </Typography>
     <Input
      placeholder='Escribe tu correo'
     />
     <Button>Agregar correo electrónico</Button>
     <Typography>¿Haces viajes para tu empresa?</Typography>
    </>
  )
}

export default Main