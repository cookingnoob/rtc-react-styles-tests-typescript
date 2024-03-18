import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import ReserveButton from './ReserveButton'
import { DestinationCardProps } from '../interfaces/Interfaces'
import { photoStyles } from '../styles/DestinationCard'

const DestinationCard: React.FC<DestinationCardProps> = ({card }) => {
  return (
    <Card sx={{minWidth: '300px'}} >
      <CardMedia
      sx={{height: 200}} >
        <img src={card.src} 
          alt={card.alt} 
          style={photoStyles}/>
      </CardMedia>
      <CardContent>
        <Typography variant='h6'>{card.title} </Typography>
        <Typography variant='body1'>{card.description}</Typography>
      </CardContent>
      <CardActions>
        <ReserveButton title={card.title}></ReserveButton>
      </CardActions>
    </Card>

  )
}

export default DestinationCard