import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../../commons/hooks/useTranslation';
import BlueprintFrame from './BlueprintFrame';
import Reveal from './Reveal';

type ProjectCard = { category: string; title: string };

const ProjectsSection = () => {
    const { t, tList } = useTranslation();
    const cards = tList<ProjectCard>('projects.cards');
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    return (
        <Box as="section" id="proyectos" scrollMarginTop="80px" borderTop="1px solid" borderColor={divider}>
            <Box maxW="1180px" mx="auto" px={6} py={{ base: 20, md: 32 }}>
                <Reveal>
                    <Box display="flex" alignItems="baseline" gap={4} mb={3}>
                        <Text fontSize="11px" letterSpacing=".18em" color={accent}>04</Text>
                        <Heading as="h2" fontSize="clamp(32px, 4vw, 52px)" m={0} textTransform="uppercase">
                            {t('projects.title')}
                        </Heading>
                    </Box>
                    <Text mb={10} fontSize="14px" opacity={0.6}>
                        {t('projects.placeholder')}
                    </Text>
                </Reveal>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                    {cards.map((card, i) => (
                        <Reveal key={card.title} delay={i * 0.07}>
                            <BlueprintFrame
                                p={0}
                                role="group"
                                transition="transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease"
                                _hover={{ transform: 'translateY(-4px)', borderColor: accent }}
                            >
                                <Box
                                    aspectRatio="4/3"
                                    borderBottom="1px solid"
                                    borderColor={divider}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="12px"
                                    letterSpacing=".14em"
                                    textTransform="uppercase"
                                    opacity={0.35}
                                >
                                    {t('projects.image')}
                                </Box>
                                <Box p={6}>
                                    <Text fontSize="10px" letterSpacing=".14em" textTransform="uppercase" color={accent}>
                                        {card.category}
                                    </Text>
                                    <Heading as="h3" fontSize="22px" my={2}>
                                        {card.title}
                                    </Heading>
                                    <Text fontSize="14px" lineHeight="1.6" opacity={0.72}>
                                        {t('projects.body')}
                                    </Text>
                                    <Box
                                        h="2px"
                                        w={0}
                                        bg={accent}
                                        mt={5}
                                        transition="width .45s cubic-bezier(.2,.7,.2,1)"
                                        _groupHover={{ w: '100%' }}
                                    />
                                </Box>
                            </BlueprintFrame>
                        </Reveal>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ProjectsSection;
