import { Box, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box
            maxW="1200px"
            mx="auto"
            bg={useColorModeValue('brand.light', 'brand.dark')}
            px={4}
            minH="100vh"
        >
            {children}
        </Box>
    )
}

export default Layout
