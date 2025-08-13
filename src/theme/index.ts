// theme/index.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { tr } from 'framer-motion/client'

// 1. Configuración del modo de color
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

// 2. Paleta de colores personalizada
const colors = {
    brand: {
        dark: '#00041F',
        neon: '#00FE9B',
        accent: '#6664DF',
        light: '#F7F7FF',
        accentDark: '#4B4A9D',
        neonDark: '#00b368ff',
        accentLight: '#D1D0FF',
        accentTransparent: 'rgba(102, 100, 223, 0.8)',
        neonTransparent: 'rgba(0, 254, 155, 0.8)',
    },
    gray: {
        100: '#F7FAFC',
        700: '#4A5568',
        300: '#E2E8F0',
        900: '#1A202C',
    },
    whiteAlpha: {
        100: 'rgba(255, 255, 255, 0.1)',
        200: 'rgba(255, 255, 255, 0.2)',
        300: 'rgba(255, 255, 255, 0.3)',
        400: 'rgba(255, 255, 255, 0.4)',
        500: 'rgba(255, 255, 255, 0.5)',
        600: 'rgba(255, 255, 255, 0.6)',
        700: 'rgba(255, 255, 255, 0.7)',
        800: 'rgba(255, 255, 255, 0.8)',
        900: 'rgba(255, 255, 255, 0.9)',
    },
    blackAlpha: {
        100: 'rgba(0, 0, 0, 0.1)',
        200: 'rgba(0, 0, 0, 0.2)',
        300: 'rgba(0, 0, 0, 0.3)',
        400: 'rgba(0, 0, 0, 0.4)',
        500: 'rgba(0, 0, 0, 0.5)',
        600: 'rgba(0, 0, 0, 0.6)',
        700: 'rgba(0, 0, 0, 0.7)',
        800: 'rgba(0, 0, 0, 0.8)',
        900: 'rgba(0, 0, 0, 0.9)',
    },
    transparent: 'transparent',
    current: 'currentColor',
    inherit: 'inherit',
    initial: 'initial',
    unset: 'unset',
    white: '#FFFFFF',
    black: '#000000',
    red: {
        50: '#FFF5F5',
        100: '#FED7D7',
        200: '#FEB2B2',
        300: '#FC8181',
        400: '#F56565',
        500: '#E53E3E',
        600: '#C53030',
        700: '#9B2C2C',
        800: '#822727',
        900: '#63171B',
    },
    green: {
        50: '#F0FFF4',
        100: '#C6F6D5',
        200: '#9AE6B4',
        300: '#68D391',
        400: '#48BB78',
        500: '#38A169',
        600: '#2F855A',
        700: '#276749',
        800: '#22543D',
        900: '#1C4532',
    },
    blue: {
        50: '#EBF8FF',
        100: '#BEE3F8',
        200: '#90CDF4',
        300: '#63B3ED',
        400: '#4299E1',
        500: '#3182CE',
        600: '#2B6CB0',
        700: '#2C5282',
        800: '#2A4365',
        900: '#1A365D',
    },
    yellow: {
        50: '#FFFFF0',
        100: '#FEFCBF',
        200: '#FAF089',
        300: '#F6E05E',
        400: '#ECC94B',
        500: '#D69E2E',
        600: '#B7791F',
        700: '#975A16',
        800: '#744210',
        900: '#5F370E',
    },
    purple: {
        50: '#FAF5FF',
        100: '#E9D8FD',
        200: '#D6BCFA',
        300: '#B794F4',
        400: '#9F7AEA',
        500: '#805AD5',
        600: '#6B46C1',
        700: '#553C9A',
        800: '#44337A',
        900: '#322659',
    },
    pink: {
        50: '#FFF5F7',
        100: '#FED7E2',
        200: '#FBB6CE',
        300: '#F687B3',
        400: '#ED64A6',
        500: '#D53F8C',
        600: '#B83280',
        700: '#97266D',
        800: '#702459',
        900: '#521B41',
    }
}

// 3. Tipografías
const fonts = {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
}

// 4. Estilos globales
const styles = {
    global: (props: any) => ({
        body: {
            bg: mode(colors.brand.light, colors.brand.dark)(props),
            color: mode(colors.brand.dark, colors.brand.light)(props),
            overflowX: 'hidden',
        },
        a: {
            color: mode(colors.brand.accent, colors.brand.neon)(props),
            _hover: {
                textDecoration: 'underline',
                color: colors.brand.neon,
            },
        },
    }),
}

// 5. Componentes personalizados
const components = {
    Button: {
        baseStyle: {
            fontWeight: 'bold',
            borderRadius: 'md',
        },
        variants: {
            solid: (props: any) => ({
                bg: mode(colors.brand.accent, colors.brand.neon)(props),
                color: mode(colors.brand.light, colors.brand.dark)(props),
                _hover: {
                    bg: mode(colors.brand.neon, colors.brand.accent)(props),
                },
            }),
            ghost: (props: any) => ({
                color: mode(colors.brand.accent, colors.brand.neon)(props),
                _hover: {
                    bg: mode('gray.100', 'whiteAlpha.100')(props),
                },
            }),
        },
    },
    Heading: {
        baseStyle: {
            color: colors.brand.accent,
        },
    },
}

// 6. Extender el tema
const theme = extendTheme({ config, colors, fonts, styles, components })

export default theme
