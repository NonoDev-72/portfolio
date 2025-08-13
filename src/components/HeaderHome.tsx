import { Flex, Spacer, HStack, Box, Image, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ColorModeSwitcher from './ColorModeSwitcher'
import HeaderLinks from './HeaderLinks'
import MobileMenu from './mobile/MobileMenu'
import { useConfig } from '../commons/context/ConfigContext'

const Header = () => {
    const logoSrc = useColorModeValue('/logoLight.svg', '/logoDark.svg')
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
                        <LanguageSwitcher />
                        <ColorModeSwitcher />
                    </HStack>
                </Flex>

                {/* Mobile menu */}
                <Box display={{ base: 'block', md: 'none' }}>
                    <MobileMenu />
                </Box>

            </Flex>
        </>
    )
}

export default Header
