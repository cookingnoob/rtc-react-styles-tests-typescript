import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ReserveButton from './ReserveButton'

interface DestinationCardProps {
  src: string;
  alt: string;
  title: string;
  description:string
}

const DestinationCard: React.FC<DestinationCardProps> = ({src, alt ,title, description }) => {
  return (
    <Card sx={{maxWidth:'500px',}} >
      <CardMedia
      sx={{height: 200}} >
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
        <ReserveButton title={title}></ReserveButton>
      </CardActions>
    </Card>

  )
}

export default DestinationCard