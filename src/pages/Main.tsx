import { Box, Button, IconButton, Input, Link, Typography, css } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MailForm from '../components/MailForm';
import BackgroundImage from '../components/BackgroundImage';
import VideoModal from '../components/VideoModal';

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
          height={'90vh'}>
      <BackgroundImage/>

      <Box zIndex={1}
          color={'whitesmoke'}
          width={'500px'}
          marginLeft={'100px'}
          marginTop={'200px'}>

      <Typography variant='h4'>Siéntete en casa allá donde te lleve tu trabajo</Typography>
      <Typography variant='body1'>
        Échale un vistazo al video para viajes de trabajo 
        <VideoModal/>
      </Typography>
      <MailForm/>
     <Typography>¿Haces viajes para tu empresa?
        <Link>Más información</Link>
        <IconButton aria-label='Más información' sx={{
          color: 'whitesmoke'
         }}> <ArrowRightIcon/> </IconButton>
     </Typography>
     </Box>
    </Box>
 
    </>
  )
}

export default Main