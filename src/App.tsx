import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './routes'
import theme from './theme'
import { LanguageProvider } from './commons/context/LanguageContext'
import Layout from './components/Layout'
import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ConfigProvider } from './commons/context/ConfigContext'

function App() {
  const { colorMode } = useColorMode()

  useEffect(() => {
    
  }, [colorMode])

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <LanguageProvider>
          <ConfigProvider>
            <AppRoutes />
          </ConfigProvider>
        </LanguageProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default App