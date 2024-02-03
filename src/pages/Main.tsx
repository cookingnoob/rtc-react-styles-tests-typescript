import { Box, Button, IconButton, Input, Link, Typography } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

//estilos acorde a la imagen de referencia
//interactivilidad 
  //mandas tu correo
    //el boton se vuelve en un spinner
    //mensaje de que recibido
  //boton de ver el video se abre un modal con un vide
  //boton de mas info se abre una pagina extra

const Main = () => {
  return (
    <>
    <Box display={'flex'} 
          alignContent={'center'} 
          justifyContent={'center'}>
      <Box >
       <img src='../../public/mainImage.png' 
            alt='Imagen de la propiedad'/>
     </Box>

      <Box>
      <Typography variant='h2'>Siéntete en tu casa allá donde te lleve tu trabajo</Typography>
      <Typography variant='body1'>
        echale un vistazo al video para viajes de trabajo 
         <IconButton aria-label='Ver video'> <ArrowRightIcon/> </IconButton>
      </Typography>
     <Input
      placeholder='Escribe tu correo'
     />
     <Button>Agregar correo electrónico</Button>
     <Typography>¿Haces viajes para tu empresa?
        <Link>Más información</Link>
        <IconButton aria-label='Más información'> <ArrowRightIcon/> </IconButton>
     </Typography>
     </Box>
    </Box>
 
    </>
  )
}

export default Main