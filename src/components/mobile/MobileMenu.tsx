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
    Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
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
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark')
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
            height: '1px',
            bg: accentColor,
            transition: 'width 0.3s ease',
        },
    }

    const links = [
        { href: '#inicio', label: 'nav.home' },
        { href: '#trayectoria', label: 'nav.career' },
        { href: '#stack', label: 'nav.stack' },
        { href: '#proyectos', label: 'nav.projects' },
        { href: '#sobre-mi', label: 'nav.about' },
        { href: '#contacto', label: 'nav.contact' },
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
                            <Box as="a" href="#inicio" onClick={onClose}>
                                <Image
                                    src={logoSrc}
                                    alt="Logo"
                                    boxSize="34px"
                                    objectFit="contain"
                                    draggable={false}
                                />
                            </Box>
                            <ColorModeSwitcher />
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing={4}>
                            {links.map(({ href, label }) => (
                                <Box
                                    key={href}
                                    as="a"
                                    href={href}
                                    onClick={onClose}
                                    sx={linkStyles}
                                >
                                    {t(label)}
                                </Box>
                            ))}
                            <Button
                                as="a"
                                href={`/Cv-Juan-Antonio-Bedmar-${language}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                borderColor={divider}
                                borderRadius={0}
                                fontSize="13px"
                                leftIcon={<BsCloudDownload />}
                                _hover={{ borderColor: accentColor, color: accentColor }}
                            >
                                {t('common.download_cv')}
                            </Button>
                            <LanguageSwitcher />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu
