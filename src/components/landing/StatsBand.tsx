import { Box, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../../commons/hooks/useTranslation';
import { useCountUp } from '../../commons/hooks/useCountUp';
import Reveal from './Reveal';

const STATS = [
    { value: 5, labelKey: 'stats.years', suffix: '+' },
    { value: 3, labelKey: 'stats.orgs', suffix: '' },
    { value: 17, labelKey: 'stats.tech', suffix: '' },
    { value: 2, labelKey: 'stats.platforms', suffix: '' },
];

const Stat = ({ value, labelKey, suffix }: { value: number; labelKey: string; suffix: string }) => {
    const { t } = useTranslation();
    const { ref, value: count } = useCountUp(value);
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    return (
        <Box ref={ref} py={{ base: 9, md: 12 }} px={{ base: 4, md: 6 }}>
            <Text fontFamily="heading" fontWeight={700} fontSize="clamp(34px, 4.2vw, 56px)" lineHeight="1" whiteSpace="nowrap">
                {count}
                {suffix && <Text as="span" color={accent}>{suffix}</Text>}
            </Text>
            <Text fontSize="11px" letterSpacing=".12em" textTransform="uppercase" mt={3} opacity={0.65}>
                {t(labelKey)}
            </Text>
        </Box>
    );
};

const StatsBand = () => {
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');

    return (
        <Box borderTop="1px solid" borderBottom="1px solid" borderColor={divider}>
            <Box maxW="1180px" mx="auto" px={6}>
                <Reveal>
                    <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}>
                        {STATS.map((stat, i) => (
                            <Box
                                key={stat.labelKey}
                                borderLeft={{ base: i % 2 === 0 ? 'none' : '1px solid', md: i === 0 ? 'none' : '1px solid' }}
                                borderColor={divider}
                            >
                                <Stat {...stat} />
                            </Box>
                        ))}
                    </Grid>
                </Reveal>
            </Box>
        </Box>
    );
};

export default StatsBand;
