import React from 'react'
import MainSection from '../components/MainSection'
import { Box } from '@mui/material'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
    <MainSection/>
    </Box>
    </>
  )
}

export default Home