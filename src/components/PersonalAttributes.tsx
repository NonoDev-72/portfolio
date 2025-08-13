import React from 'react';
import { Box, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../commons/hooks/useTranslation';

const attributes = [
    'home.personalAttributesOptions.teamwork',
    'home.personalAttributesOptions.communication',
    'home.personalAttributesOptions.responsibility',
    'home.personalAttributesOptions.adaptability',
    'home.personalAttributesOptions.criticalThinking',
    'home.personalAttributesOptions.proactivity',
];

const PersonalAttributes = () => {
    const { t } = useTranslation();
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const borderColor = useColorModeValue('brand.dark', 'brand.light');
    

    return (
        <Box
            p={6}
            borderRadius="2xl"
            borderColor={borderColor}
            borderWidth="2px"
            boxShadow="md"
            flex="1"
            minW="300px"
        >
            <Heading size="md" mb={4} color={textColor}>
                Atributos Personales
            </Heading>
            <VStack align="start" spacing={3}>
                {attributes.map((attr) => (
                    <Text key={attr} fontSize="sm" color={textColor}>
                        • {t(attr)}
                    </Text>
                ))}
            </VStack>
        </Box>
    );
};

export default PersonalAttributes;
