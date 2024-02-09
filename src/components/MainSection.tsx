import { Box, Grid, Typography } from '@mui/material'
import DestinationCard from './DestinationCard'
import destinationData from './DestinationData'

const MainSection = () => {
  return (
    <Box 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'center'} 
        alignItems={'center'} >

        <Box width={'100%'} bgcolor={'pink'} padding={'10px'} borderRadius={'10px'}>
            <Typography textAlign={'center'}>Nuevas fechas disponibles! abril 2024</Typography>
        </Box>
        <Grid container spacing={5} alignContent={'space-between'} justifyContent={'space-evenly'} padding={'30px'}>
            {destinationData.map((card, index) =>(
                <Grid item xs={4}>
                    <DestinationCard 
                        key={`${card.title}-${index}`}
                        src={card.src}
                        alt={card.alt}
                        title={card.title}
                        description={card.description}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default MainSection