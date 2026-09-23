import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../../commons/hooks/useTranslation';
import BlueprintFrame from './BlueprintFrame';
import Reveal from './Reveal';

const AboutSection = () => {
    const { t } = useTranslation();
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');
    const tint = useColorModeValue('rgba(89,128,166,0.07)', 'rgba(148,188,227,0.07)');

    return (
        <Box as="section" id="sobre-mi" scrollMarginTop="80px" borderTop="1px solid" borderColor={divider} bg={tint}>
            <Box maxW="1180px" mx="auto" px={6} py={{ base: 20, md: 32 }}>
                <Reveal>
                    <Box display="flex" alignItems="baseline" gap={4} mb={10}>
                        <Text fontSize="11px" letterSpacing=".18em" color={accent}>05</Text>
                        <Heading as="h2" fontSize="clamp(32px, 4vw, 52px)" m={0} textTransform="uppercase">
                            {t('about.title')}
                        </Heading>
                    </Box>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} alignItems="start">
                        <Text fontSize="17px" lineHeight="1.75">
                            {t('about.description')}
                        </Text>
                        <BlueprintFrame p={6}>
                            <Heading as="h3" fontSize="20px" mb={3} textTransform="uppercase" letterSpacing=".06em">
                                {t('about.passionsTitle')}
                            </Heading>
                            <Text fontSize="15px" lineHeight="1.7">
                                {t('about.passionsText')}
                            </Text>
                        </BlueprintFrame>
                    </Grid>
                </Reveal>
            </Box>
        </Box>
    );
};

export default AboutSection;
