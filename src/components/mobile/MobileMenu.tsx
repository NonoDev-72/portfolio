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
    Image,
    Flex,
    HStack,
    Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '../../commons/hooks/useTranslation'
import LanguageSwitcher from '../LanguageSwitcher'
import ColorModeSwitcher from '../ColorModeSwitcher'
import { BsCloudDownload } from 'react-icons/bs'
import { useLanguage } from '../../commons/context/LanguageContext'

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation()
    const { language } = useLanguage()
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
                            <Box>
                                <HStack as={"a"} spacing={2} alignItems={"center"} href={`/Cv-Juan-Antonio-Bedmar-${language}.pdf`} download _hover={{ color: useColorModeValue('brand.accentDark', 'brand.neonDark') }}>
                                    <BsCloudDownload />
                                    <Heading as="span" size="sm" fontWeight="medium" cursor="pointer" color={useColorModeValue('brand.accent', 'brand.neon')} _hover={{ color: useColorModeValue('brand.accentDark', 'brand.neonDark') }}>
                                        {t('common.download_cv')}
                                    </Heading>

                                </HStack>
                            </Box>
                            <LanguageSwitcher />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu
