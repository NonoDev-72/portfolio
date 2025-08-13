import { Box, HStack, textDecoration, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '../commons/hooks/useTranslation'

const HeaderLinks = () => {
    const { t } = useTranslation()
    const accentColor = useColorModeValue('brand.accent', 'brand.neon')

    const linkStyles = {
        position: 'relative',
        fontWeight: 'medium',
        px: 2,
        py: 1,
        transition: 'color 0.3s ease',
        _hover: {
            color: accentColor,
            _after: {
                width: '100%',
            },
            textDecoration: 'none',
        },
        _after: {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '0',
            height: '2px',
            bg: accentColor,
            transition: 'width 0.3s ease',
        },
        '&.active': {
            color: accentColor,
            _after: {
                width: '100%',
            },
        },
    }

    const links = [
        { path: '/', label: 'header.home' },
       // { path: '/projects', label: 'header.projects' },
        { path: '/about', label: 'header.about' },
        { path: '/contact', label: 'header.contact' },
    ]

    return (
        <HStack spacing={5} px={4} pt={1}>
            {links.map(({ path, label }) => (
                <Box
                    as={NavLink}
                    to={path}
                    key={path}
                    sx={linkStyles}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    {t(label)}
                </Box>
            ))}
        </HStack>
    )
}

export default HeaderLinks
