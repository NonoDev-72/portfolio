import { Heading, HStack, Spacer, Text, Image, Box, Button, Link, useColorModeValue, VStack } from "@chakra-ui/react";
import { useTranslation } from "../commons/hooks/useTranslation";
import { use } from "react";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Spacer h={20} />
            <Heading>{t('about.title')}</Heading>
            <Spacer h={20} />
            <Box display={{ base: 'none', md: 'block' }}>
                <HStack spacing={5} alignItems="center" >
                    <Image src="/profile.jpg" alt={t('about.title')} boxSize="300px" borderRadius="full" />
                    <Text>{t('about.description')}</Text>
                </HStack>
                <Spacer h={20} />
                <Box textAlign="center">
                    <Button as={NavLink} size="lg" _hover={{ bg: useColorModeValue("brand.accentDark", "brand.neonDark"), textDecoration: "none", color: useColorModeValue("white", "black") }} to="/contact">
                        {t('contact.button')}
                    </Button>
                </Box>
            </Box>

            <Box display={{ base: 'block', md: 'none' }}>
                <VStack spacing={5} alignItems="center" >
                    <Image src="/profile.jpg" alt={t('about.title')} boxSize="300px" borderRadius="full" />
                    <Text>{t('about.description')}</Text>
                </VStack>
                <Spacer h={20} />
                <Box textAlign="center">
                    <Button as={NavLink} size="lg" _hover={{ bg: useColorModeValue("brand.accentDark", "brand.neonDark"), textDecoration: "none", color: useColorModeValue("white", "black") }} to="/contact">
                        {t('contact.button')}
                    </Button>
                </Box>
            </Box>

            <Spacer h={10} />
        </>
    );
};

export default AboutPage;
