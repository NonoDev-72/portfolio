import { useTranslation } from '../commons/hooks/useTranslation';
import { Box, Heading, Spacer, Text, Image, Flex, HStack } from '@chakra-ui/react';
import Skills from '../components/Skils';
import PersonalAttributes from '../components/PersonalAttributes';
import { NavLink } from 'react-router-dom';
import Timeline from '../components/TimeLine';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Spacer h={20} />
            <Heading>{t('home.title')}</Heading>
            <Spacer h={20} />
            <Box>
                <HStack>
                    <Text fontSize="md" color="gray.600">
                        {t('home.subtitle')}
                    </Text>
                    <Text as={NavLink} to="/about">
                        {t('home.subtitlelink')}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {t('home.subtitle2')}
                    </Text>
                </HStack>
                <Text mt={1}>{t('home.description')}</Text>
                <Spacer h={20} />
                <Timeline />
                <Spacer h={20} />
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="stretch"
                    gap={6}
                    w="100%"
                >
                    <Box flex="1" minW="300px">
                        <Skills />
                    </Box>
                    <PersonalAttributes />
                </Flex>
                <Spacer h={20} />
            </Box>
        </>
    );
};

export default HomePage;
