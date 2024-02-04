import { Box, Button, IconButton, Input, Link, Typography, css } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MailForm from '../components/MailForm';

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
      <Box position={'absolute'}
           zIndex={0}
        >
       <img src='../../public/mainImage.png' 
            alt='Imagen de la propiedad'/>
     </Box>

      <Box zIndex={1}
          color={'whitesmoke'}
          width={'500px'}
          marginLeft={'100px'}
          marginTop={'200px'}>

      <Typography variant='h4'>Siéntete en casa allá donde te lleve tu trabajo</Typography>
      <Typography variant='body1'>
        Échale un vistazo al video para viajes de trabajo 
         <IconButton aria-label='Ver video' > <ArrowRightIcon/> </IconButton>
      </Typography>
      <MailForm/>
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