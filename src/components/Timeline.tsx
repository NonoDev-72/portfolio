import { Box, Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "../commons/hooks/useTranslation";

type TimelineItem = {
    title: string;
    subtitle: string;
    date: string;
    icon?: React.ElementType;
    main?: boolean;
};

const items: TimelineItem[] = [
    {
        title: "home.timeline.p2",
        subtitle: "Indra Solutions",
        date: "2021 - Actualidad",
        icon: FaBriefcase,
        main: true,
    },
    {
        title: "home.timeline.p1",
        subtitle: "H2TIC",
        date: "2019 - 2021",
        icon: FaBriefcase,
    },
];

const MotionBox = motion(Box);

const Timeline = () => {
    const { t } = useTranslation();

    function getBorderColor(isMain: boolean | undefined) {
        return isMain
            ? useColorModeValue("brand.accent", "brand.neonDark")
            : useColorModeValue("gray.100", "gray.700");
    }

    function hoverColor(isMain: boolean | undefined) {
        return isMain
            ? useColorModeValue("brand.accent", "brand.neonDark")
            : useColorModeValue("gray.200", "gray.600");
    }

    return (
        <>
            <Text fontSize="2xl" fontWeight="bold" textAlign="left" mb="4">
                {t("home.titleProfesional")}
            </Text>

            <Flex overflowX="auto" wrap="nowrap" gap="6" padding="4">
                {items.map((item, index) => (
                    <MotionBox
                        key={index}
                        minWidth="30%"
                        flexShrink={0}
                        borderColor={getBorderColor(item.main)}
                        borderRadius="md"
                        borderWidth="1px"
                        borderStyle="solid"
                        _hover={{ bg: hoverColor(item.main) }}
                        p="4"
                        shadow="md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        <Flex align="center" mb="2">
                            {item.icon && <Icon as={item.icon} boxSize={6} mr="2" />}
                            <Text fontWeight="bold">{t(item.title)}</Text>
                        </Flex>
                        <Text fontSize="sm" color="gray.500">
                            {item.subtitle}
                        </Text>
                        <Text fontSize="xs" mt="1">
                            {item.date}
                        </Text>
                    </MotionBox>
                ))}
            </Flex>
        </>
    );
};

export default Timeline;
