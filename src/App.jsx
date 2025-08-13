import { ChakraProvider, Box, Text, VStack, Icon } from '@chakra-ui/react'
import { MdConstruction } from 'react-icons/md'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={6}>
          <Icon as={MdConstruction} boxSize={16} color="yellow.400" />
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            La página web está en desarrollo
          </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default App