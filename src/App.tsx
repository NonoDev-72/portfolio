import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './routes.tsx'
import theme from './theme'
import { LanguageProvider } from './commons/context/LanguageContext.tsx'
import Layout from './components/Layout.tsx'
import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ConfigProvider } from './commons/context/ConfigContext.tsx'

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