import { Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { useLanguage } from '../commons/context/LanguageContext'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark')
    const accent = useColorModeValue('brand.accent', 'brand.neon')
    const pageBg = useColorModeValue('brand.light', 'brand.dark')
    const text = useColorModeValue('brand.dark', 'brand.light')

    const segments: Array<{ code: 'es' | 'en'; label: string }> = [
        { code: 'es', label: 'ES' },
        { code: 'en', label: 'EN' },
    ]

    return (
        <Flex border="1px solid" borderColor={divider}>
            {segments.map(({ code, label }, i) => (
                <Button
                    key={code}
                    onClick={() => setLanguage(code)}
                    variant="unstyled"
                    borderRadius={0}
                    borderLeft={i === 0 ? 'none' : '1px solid'}
                    borderColor={divider}
                    fontSize="12px"
                    px={3}
                    h="32px"
                    minW="auto"
                    bg={language === code ? accent : 'transparent'}
                    color={language === code ? pageBg : text}
                >
                    {label}
                </Button>
            ))}
        </Flex>
    )
}

export default LanguageSwitcher
