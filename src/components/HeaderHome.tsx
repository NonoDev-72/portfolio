import { Flex, Spacer, HStack, Box, Image, Heading, Center } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ColorModeSwitcher from './ColorModeSwitcher'
import HeaderLinks from './HeaderLinks'
import MobileMenu from './mobile/MobileMenu'
import { useConfig } from '../commons/context/ConfigContext'
import { BsCloudDownload } from "react-icons/bs";
import { use } from 'react'
import { useLanguage } from '../commons/context/LanguageContext'
import { useTranslation } from '../commons/hooks/useTranslation'


const Header = () => {
    const logoSrc = useColorModeValue('/logoLight.svg', '/logoDark.svg')
    const { language } = useLanguage()
    const { t } = useTranslation();

    const { notFoundActive, maintenanceActive } = useConfig()
    return (
        notFoundActive || maintenanceActive ? null :
            <>
                <Flex
                    as="header"
                    align="center"
                    py={4}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    position="sticky"
                    top={0}
                    zIndex={1000}
                    bg={useColorModeValue('brand.light', 'brand.dark')}
                >
                    <Flex
                        display={{ base: 'none', md: 'flex' }}
                        align="center"
                        justify="space-between"
                        w="100%"
                    >
                        {/* Logo */}
                        <Link to="/">
                            <Image
                                src={logoSrc}
                                alt="Logo"
                                boxSize="40px"
                                objectFit="contain"
                                draggable={false}
                            />
                        </Link>
                        <HeaderLinks />
                        <HStack spacing={4} ml={4} pt={1}>
                            <Box>
                                <HStack as={"a"} spacing={2} alignItems={"center"} href={`/Cv-Juan-Antonio-Bedmar-${language}.pdf`} download _hover={{ color: useColorModeValue('brand.accentDark', 'brand.neonDark') }}>
                                    <BsCloudDownload />
                                    <Heading as="span" size="sm" fontWeight="medium" cursor="pointer" color={useColorModeValue('brand.accent', 'brand.neon')} _hover={{ color: useColorModeValue('brand.accentDark', 'brand.neonDark') }}>
                                        {t('common.download_cv')}
                                    </Heading>

                                </HStack>
                            </Box>
                            <LanguageSwitcher />
                            <ColorModeSwitcher />
                        </HStack>
                    </Flex >

                    {/* Mobile menu */}
                    < Box display={{ base: 'block', md: 'none' }
                    }>
                        <MobileMenu />
                    </Box >

                </Flex >
            </>
    )
}

export default Header
