import { Flex, HStack, Box, Image, Button, useColorModeValue } from '@chakra-ui/react'
import LanguageSwitcher from './LanguageSwitcher'
import ColorModeSwitcher from './ColorModeSwitcher'
import HeaderLinks from './HeaderLinks'
import MobileMenu from './mobile/MobileMenu'
import { useConfig } from '../commons/context/ConfigContext'
import { BsCloudDownload } from "react-icons/bs";
import { useLanguage } from '../commons/context/LanguageContext'
import { useTranslation } from '../commons/hooks/useTranslation'


const Header = () => {
    const logoSrc = useColorModeValue('/logoLight.svg', '/logoDark.svg')
    const { language } = useLanguage()
    const { t } = useTranslation();
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark')
    const accent = useColorModeValue('brand.accent', 'brand.neon')

    const { notFoundActive, maintenanceActive } = useConfig()
    return (
        notFoundActive || maintenanceActive ? null :
            <>
                <Flex
                    as="header"
                    align="center"
                    py={4}
                    borderBottom="1px solid"
                    borderColor={divider}
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
                        <Box as="a" href="#inicio">
                            <Image
                                src={logoSrc}
                                alt="Logo"
                                boxSize="34px"
                                objectFit="contain"
                                draggable={false}
                            />
                        </Box>
                        <HeaderLinks />
                        <HStack spacing={4} ml={4}>
                            <Button
                                as="a"
                                href={`/Cv-Juan-Antonio-Bedmar-${language}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                borderColor={divider}
                                borderRadius={0}
                                fontSize="13px"
                                fontWeight="medium"
                                leftIcon={<BsCloudDownload />}
                                _hover={{ borderColor: accent, color: accent }}
                            >
                                {t('common.download_cv')}
                            </Button>
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
