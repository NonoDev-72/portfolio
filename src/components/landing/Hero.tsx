import { Box, Grid, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../../commons/hooks/useTranslation';
import { useTypewriter } from '../../commons/hooks/useTypewriter';
import BlueprintFrame from './BlueprintFrame';
import Reveal from './Reveal';

const Hero = () => {
    const { t, tList } = useTranslation();
    const roles = tList<string>('hero.roles');
    const typed = useTypewriter(roles);
    const accent = useColorModeValue('brand.accent', 'brand.neon');
    const accent700 = useColorModeValue('brand.accent700', 'brand.neon');

    return (
        <Box as="section" id="inicio" scrollMarginTop="80px" maxW="1180px" mx="auto" px={6} pt={{ base: 20, md: 32 }} pb={{ base: 20, md: 32 }}>
            <Grid templateColumns={{ base: '1fr', md: '1.35fr .65fr' }} gap={{ base: 10, md: 14 }} alignItems="end">
                <Reveal>
                    <Box display="flex" alignItems="center" gap={3} fontSize="11px" letterSpacing=".18em" textTransform="uppercase" color={accent} mb={5}>
                        <Text as="span">01</Text>
                        <Box as="span" w="46px" h="1px" bg={accent} />
                        <Text as="span">{t('hero.kicker')}</Text>
                    </Box>
                    <Heading
                        as="h1"
                        fontWeight={700}
                        fontSize="clamp(46px, 8vw, 104px)"
                        lineHeight="0.92"
                        letterSpacing="-.01em"
                        textTransform="uppercase"
                        m={0}
                    >
                        {t('home.title')}
                    </Heading>
                    <Box mt={6} fontSize="26px" letterSpacing=".04em" color={accent700} minH="34px" fontFamily="heading">
                        <Text as="span">{typed}</Text>
                        <Box
                            as="span"
                            display="inline-block"
                            w="2px"
                            h="22px"
                            ml="2px"
                            verticalAlign="-3px"
                            bg={accent}
                            sx={{ animation: 'pfblink 1s step-end infinite' }}
                        />
                    </Box>
                    <Text mt={7} maxW="62ch" fontSize="16px" lineHeight="1.65">
                        {t('home.subtitle')} <Text as="strong" fontWeight={600}>{t('home.subtitlelink')}</Text> {t('home.subtitle2')}
                    </Text>
                    <Text mt={4} maxW="68ch" fontSize="16px" lineHeight="1.7" opacity={0.78}>
                        {t('home.description')}
                    </Text>
                    <Box display="flex" gap={4} mt={9} flexWrap="wrap">
                        <Button as="a" href="#contacto" variant="solid" px={7} py={6} fontSize="14px">
                            {t('contact.button')}
                        </Button>
                        <Button as="a" href="#proyectos" variant="outline" borderColor={accent} color={accent} px={7} py={6} fontSize="14px" borderRadius={0}>
                            {t('hero.seework')}
                        </Button>
                    </Box>
                </Reveal>
                <Reveal delay={0.07}>
                    <BlueprintFrame aspectRatio="3/4" overflow="hidden">
                        <Box
                            as="img"
                            src="/profile.jpg"
                            alt={t('home.subtitlelink')}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            display="block"
                            filter="grayscale(1) contrast(1.05)"
                        />
                    </BlueprintFrame>
                </Reveal>
            </Grid>
        </Box>
    );
};

export default Hero;
