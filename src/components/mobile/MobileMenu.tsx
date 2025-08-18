import {
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    VStack,
    useDisclosure,
    useColorModeValue,
    Box,
    Link,
    Image,
    Flex
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '../../commons/hooks/useTranslation'
import { use } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import ColorModeSwitcher from '../ColorModeSwitcher'

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation()
    const accentColor = useColorModeValue('brand.accent', 'brand.neon')
    const logoSrc = useColorModeValue('/logoLight.svg', '/logoDark.svg')

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
        { path: '/about', label: 'header.about' },
        { path: '/contact', label: 'header.contact' },
    ]

    return (
        <>
            <IconButton
                icon={<HamburgerIcon />}
                aria-label="Open menu"
                variant="ghost"
                onClick={onOpen}
                display={{ base: 'inline-flex', md: 'none' }}
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Flex align="center" justify="space-between">
                            <NavLink to="/">
                                <Image
                                    src={logoSrc}
                                    alt="Logo"
                                    boxSize="40px"
                                    objectFit="contain"
                                    draggable={false}
                                    onClick={onClose}
                                />
                            </NavLink>
                            <ColorModeSwitcher />
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing={4}>
                            {links.map(({ path, label }) => (
                                <Box
                                    as={NavLink}
                                    to={path}
                                    onClick={onClose}
                                    sx={linkStyles}
                                >
                                    {t(label)}
                                </Box>
                            ))}
                            <LanguageSwitcher />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu
