import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ScreenRouter from './Router'

const App = () => {
  
  return (
    <ChakraProvider>
      <ScreenRouter />
    </ChakraProvider>
  )
}

export default App