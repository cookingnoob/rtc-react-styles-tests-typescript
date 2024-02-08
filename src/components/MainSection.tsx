import { Box, Grid, Typography } from '@mui/material'
import DestinationCard from './DestinationCard'
import destinationData from './DestinationData'
//falta:
    //formulario correo con modal
    //footer
    //cambiar la imagen a cartas

const MainSection = () => {
  return (
    <Box 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'center'} 
        alignItems={'center'}
        padding={'30px'} >
        <Typography 
            variant='h1' 
            marginBottom={'30px'} 
            fontSize={'20vh'}>
            IberiViaje</Typography>

        <Box width={'100%'} bgcolor={'pink'} marginBottom={'30px'} padding={'10px'} borderRadius={'10px'}>
            <Typography textAlign={'center'}>Nuevas fechas disponibles! abril 2024</Typography>
        </Box>
        <Grid container gap={5} alignItems={'center'} justifyContent={'center'}>
            {destinationData.map((card, index) =>(
                <DestinationCard 
                    key={index}
                    src={card.src}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}/>
            ))}
        </Grid>
    </Box>
  )
}

export default MainSection