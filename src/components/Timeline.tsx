import React, { useState } from "react";
import { Box, Flex, Text, Icon, useColorModeValue, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, List, ListItem, ListIcon, Spacer, HStack, SimpleGrid } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useTranslation } from "../commons/hooks/useTranslation";
import { CheckCircleIcon } from "@chakra-ui/icons";


type TimelineItem = {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    icon?: React.ElementType;
    main?: boolean;
    description?: string;
    caught?: string[];
};

const items: TimelineItem[] = [
    {
        id: 3,
        title: "home.timeline.p2",
        subtitle: "Indra Solutions",
        date: "2023 - Actualidad",
        icon: FaBriefcase,
        main: true,
        description: "timeline.description.indra",
        caught: [
            "Kotlin",
            "Java",
            "React",
            "JavaScript",
            "Clean architecture",
            "CI/CD",
            "GitLab"
        ]
    },
    {
        id: 2,
        title: "home.timeline.p1",
        subtitle: "H2TIC",
        date: "2021 - 2023",
        icon: FaBriefcase,
        description: "timeline.description.h2tic",
        caught: [
            "Kotlin",
            "Java",
            "iOS",
            "Swift",
            "Backend",
            "Firebase",
            "Docker",
            "Git"
        ]
    },
    {
        id: 1,
        title: "home.timeline.p1e",
        subtitle: "I.E.S Oretania",
        date: "2021 - 2023",
        icon: PiStudentBold,
        description: "timeline.description.iesoretania",
        caught: [
            "C",
            "C++",
            "C#",
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
            "Unity",
            "PostgreSQL",
            "Git"
        ]
    },
];

const MotionBox = motion(Box);

const Timeline = () => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedItem, setSelectedItem] = useState<TimelineItem>({} as TimelineItem);

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
            <HStack display={{ base: "block", lg: "flex" }} spacing={4}>
                {items.map((item, index) => (
                    <Box
                        key={index}
                        mt={4}
                        minWidth="30%"
                        flexShrink={0}
                        borderColor={getBorderColor(item.main)}
                        borderRadius="md"
                        borderWidth="1px"
                        borderStyle="solid"
                        _hover={{ bg: hoverColor(item.main), cursor: "pointer" }}
                        p="4"
                        shadow="md"
                        onClick={() => {
                            setSelectedItem(item);
                            onOpen();
                        }}
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
                    </Box>
                ))}
            </HStack>
            <>
                <Modal onClose={onClose} isOpen={isOpen} isCentered size="2xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{t(selectedItem.title)}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>{t(selectedItem.description || "")}</Text>
                            <Spacer h={4} />
                            <Text fontWeight="bold" mb={2}>{t("common.skills")}</Text>
                            <Spacer h={2} />
                            {/* Lista en 4 columnas con alineación a la izquierda */}
                            <SimpleGrid columns={[1, 2, 4]} spacing={4}>
                                {selectedItem?.caught?.map((skill, idx) => (
                                    <Flex
                                        key={idx}
                                        direction="row"
                                        align="center"
                                        justify="flex-start"
                                        textAlign="left"
                                    >
                                        <CheckCircleIcon color="green.500" mr={2} />
                                        <Text>{skill}</Text>
                                    </Flex>
                                ))}
                            </SimpleGrid>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                _hover={{ bg: useColorModeValue("brand.accentDark", "brand.neonDark") }}
                            >
                                {t("common.close")}
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </>
    );
};

export default Timeline;
