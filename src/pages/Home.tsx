import React from 'react'
import MainSection from '../components/MainSection'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
    <MainSection/>
    </Box>
    <Footer/>
    </>
  )
}

export default Home