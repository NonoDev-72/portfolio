import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'

const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const favicon = document.querySelector("link[rel='icon']")
        if (favicon) {
            favicon.setAttribute(
                'href',
                colorMode === 'dark' ? '/logoDark.svg' : '/logoLight.svg'
            )
        }
    }, [colorMode])

    return (
        <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
        />
    )
}

export default ColorModeSwitcher