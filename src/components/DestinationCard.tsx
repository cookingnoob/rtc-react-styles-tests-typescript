import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ReserveButton from './ReserveButton'

const DestinationCard = ({src, alt ,title, description }) => {
  return (
    <Card sx={{maxWidth:345}} >
      <CardMedia
      sx={{height: 140, background:'red'}} >
        <img src={src} 
        alt={alt} 
        style={{width: '100%', height:'100%', objectFit:'cover'}}/>
      </CardMedia>
      <CardContent>
        <Typography variant='h6'>{title} </Typography>
        <Typography variant='body1'>{description}
        </Typography>
      </CardContent>
      <CardActions>
        <ReserveButton></ReserveButton>
      </CardActions>
    </Card>

  )
}

export default DestinationCard