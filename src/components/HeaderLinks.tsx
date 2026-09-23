import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from '../commons/hooks/useTranslation'
import { useConfig } from '../commons/context/ConfigContext'
import { navLinks } from '../commons/utils/navLinks'

const HeaderLinks = () => {
    const { t } = useTranslation()
    const { isBlocked } = useConfig()
    const accentColor = useColorModeValue('brand.accent', 'brand.neon')

    const linkStyles = {
        position: 'relative',
        fontWeight: 'medium',
        fontSize: '14px',
        px: 2,
        py: 1,
        transition: 'color 0.3s ease',
        _hover: { color: accentColor, _after: { width: '100%' }, textDecoration: 'none' },
        _after: { content: '""', position: 'absolute', bottom: '-2px', left: 0, width: '0', height: '1px', bg: accentColor, transition: 'width 0.3s ease' },
    }

    const links = navLinks.filter(({ section }) => !isBlocked(section))

    return (
        <HStack spacing={6} px={4} pt={1}>
            {links.map(({ href, label }) => (
                <Box as="a" href={href} key={href} sx={linkStyles}>
                    {t(label)}
                </Box>
            ))}
        </HStack>
    )
}

export default HeaderLinks
