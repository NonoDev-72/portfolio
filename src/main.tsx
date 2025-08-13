import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

<ColorModeScript initialColorMode={theme.config.initialColorMode} />

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
