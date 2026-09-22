import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../../commons/hooks/useTranslation';
import Skills from '../Skils';
import PersonalAttributes from '../PersonalAttributes';
import Reveal from './Reveal';

const StackSection = () => {
    const { t } = useTranslation();
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    return (
        <Box as="section" id="stack" scrollMarginTop="80px" borderTop="1px solid" borderColor={divider}>
            <Box maxW="1180px" mx="auto" px={6} py={{ base: 20, md: 32 }}>
                <Reveal>
                    <Box display="flex" alignItems="baseline" gap={4} mb={10}>
                        <Text fontSize="11px" letterSpacing=".18em" color={accent}>03</Text>
                        <Heading as="h2" fontSize="clamp(32px, 4vw, 52px)" m={0} textTransform="uppercase">
                            {t('stack.title')}
                        </Heading>
                    </Box>
                    <Grid templateColumns={{ base: '1fr', md: '1.6fr .8fr' }} gap={10} alignItems="start">
                        <Skills />
                        <PersonalAttributes />
                    </Grid>
                </Reveal>
            </Box>
        </Box>
    );
};

export default StackSection;
