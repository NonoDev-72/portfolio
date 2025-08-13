import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useLanguage } from '../commons/context/LanguageContext'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    const currentLabel = language === 'en' ? '🇺🇸 English' : '🇪🇸 Español'

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                size="sm"
                color={useColorModeValue('brand.accent', 'brand.neon')}
            >
                {currentLabel}
            </MenuButton>
            <MenuList>
                <MenuItem
                    onClick={() => setLanguage('es')}
                    fontWeight={language === 'es' ? 'bold' : 'normal'}
                    _hover={{ bg: useColorModeValue('brand.neonTransparent', 'brand.accentTransparent')}}
                    bg={language === 'es' ? useColorModeValue('gray.100', 'gray.700') : 'transparent'}
                    color={useColorModeValue('brand.accentDark', 'brand.neonDark')}
                >
                    🇪🇸 Español
                </MenuItem>
                <MenuItem
                    onClick={() => setLanguage('en')}
                    fontWeight={language === 'en' ? 'bold' : 'normal'}
                    _hover={{ bg: useColorModeValue('brand.neonTransparent', 'brand.accentTransparent') }}
                    bg={language === 'en' ? useColorModeValue('gray.100', 'gray.700') : 'transparent'}
                    color={useColorModeValue('brand.accentDark', 'brand.neonDark')}
                >
                    🇺🇸 English
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default LanguageSwitcher
