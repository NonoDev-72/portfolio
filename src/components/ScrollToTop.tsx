import { IconButton, ScaleFade, useColorModeValue } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useTranslation } from '../commons/hooks/useTranslation'

const SHOW_AFTER_PX = 400

const ScrollToTop = () => {
    const { t } = useTranslation()
    const [visible, setVisible] = useState(false)
    const accent = useColorModeValue('brand.accent', 'brand.neon')
    const hoverBg = useColorModeValue('brand.accentDark', 'brand.neonDark')
    const hoverColor = useColorModeValue('white', 'black')

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <ScaleFade in={visible} unmountOnExit initialScale={0.8}>
            <IconButton
                aria-label={t('common.scrollTop')}
                icon={<ArrowUpIcon boxSize={5} />}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                position="fixed"
                bottom={{ base: 4, md: 8 }}
                right={{ base: 4, md: 8 }}
                zIndex="overlay"
                variant="outline"
                borderColor={accent}
                color={accent}
                bg={useColorModeValue('brand.light', 'brand.dark')}
                borderRadius={0}
                _hover={{ bg: hoverBg, color: hoverColor }}
            />
        </ScaleFade>
    )
}

export default ScrollToTop
