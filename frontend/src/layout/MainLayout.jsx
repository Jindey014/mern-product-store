import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Box, useColorModeValue } from '@chakra-ui/react'

const MainLayout = () => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default MainLayout
