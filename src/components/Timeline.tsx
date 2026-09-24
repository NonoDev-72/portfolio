import {
    Box, Flex, Text, Icon, useColorModeValue,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Wrap, WrapItem, Tag,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { useTranslation } from "../commons/hooks/useTranslation";
import { useConfig, getTimeline } from "../commons/context/ConfigContext";
import BlueprintFrame from "./landing/BlueprintFrame";
import Reveal from "./landing/Reveal";

const ICONS: Record<string, React.ElementType> = {
    briefcase: FaBriefcase,
    student: PiStudentBold,
};

const Timeline = () => {
    const { t } = useTranslation();
    const { config } = useConfig();
    const items = getTimeline(config);
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    return (
        <Box as="section" id="trayectoria" scrollMarginTop="80px" maxW="1180px" mx="auto" px={6} py={{ base: 20, md: 32 }}>
            <Reveal>
                <Box display="flex" alignItems="baseline" gap={4} mb={10}>
                    <Text fontSize="11px" letterSpacing=".18em" color={accent}>02</Text>
                    <Text as="h2" fontFamily="heading" fontSize="clamp(32px, 4vw, 52px)" m={0} textTransform="uppercase" letterSpacing=".01em" color={useColorModeValue('brand.accent', 'brand.neon')}>
                        {t('career.title')}
                    </Text>
                </Box>
            </Reveal>
            <Accordion allowToggle display="flex" flexDirection="column" gap={4}>
                {items.map((item, i) => (
                    <Reveal key={item.id} delay={i * 0.07}>
                        <BlueprintFrame p={0}>
                            <AccordionItem border="none">
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton p={6} _hover={{ bg: 'transparent' }}>
                                            <Flex flex="1" align="flex-start" gap={5} textAlign="left">
                                                <Flex
                                                    flexShrink={0}
                                                    w="42px"
                                                    h="42px"
                                                    border="1px solid"
                                                    borderColor={divider}
                                                    align="center"
                                                    justify="center"
                                                    color={accent}
                                                >
                                                    <Icon as={ICONS[item.icon ?? 'briefcase'] ?? FaBriefcase} boxSize={5} />
                                                </Flex>
                                                <Box flex={1} minW={0}>
                                                    <Flex align="baseline" gap={3} flexWrap="wrap">
                                                        <Text fontFamily="heading" fontSize="24px" m={0}>
                                                            {t(item.title)}
                                                        </Text>
                                                        {item.main && (
                                                            <Tag size="sm" variant="outline" colorScheme="blue" borderRadius={0}>
                                                                {t('career.current')}
                                                            </Tag>
                                                        )}
                                                    </Flex>
                                                    <Text mt={1} fontSize="14px" opacity={0.65}>
                                                        {item.subtitle} · {t(item.date)}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <AccordionIcon
                                                color={accent}
                                                transition="transform .35s ease"
                                                transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}
                                            />
                                        </AccordionButton>
                                        <AccordionPanel px={6} pb={6} pt={0}>
                                            <Text fontSize="15px" lineHeight="1.7" maxW="80ch">
                                                {t(item.description)}
                                            </Text>
                                            <Wrap spacing={2} mt={4}>
                                                {item.caught.map((skill) => (
                                                    <WrapItem key={skill}>
                                                        <Tag size="sm" variant="subtle" borderRadius={0}>
                                                            {skill}
                                                        </Tag>
                                                    </WrapItem>
                                                ))}
                                            </Wrap>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </BlueprintFrame>
                    </Reveal>
                ))}
            </Accordion>
        </Box>
    );
};

export default Timeline;
