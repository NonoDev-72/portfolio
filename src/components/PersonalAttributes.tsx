import { VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from '../commons/hooks/useTranslation';
import BlueprintFrame from './landing/BlueprintFrame';

const attributes = [
    'home.personalAttributesOptions.teamwork',
    'home.personalAttributesOptions.communication',
    'home.personalAttributesOptions.responsibility',
    'home.personalAttributesOptions.adaptability',
    'home.personalAttributesOptions.criticalThinking',
    'home.personalAttributesOptions.proactivity',
    'home.personalAttributesOptions.creativity',
];

const PersonalAttributes = () => {
    const { t } = useTranslation();
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    return (
        <BlueprintFrame p={6} flex="0.8" minW="280px">
            <Heading as="h3" fontSize="20px" mb={4} textTransform="uppercase" letterSpacing=".06em">
                {t('home.personalAttributes')}
            </Heading>
            <VStack align="start" spacing={3}>
                {attributes.map((attr) => (
                    <Text key={attr} fontSize="15px" display="flex" gap={2}>
                        <Text as="span" color={accent}>+</Text>
                        {t(attr)}
                    </Text>
                ))}
            </VStack>
        </BlueprintFrame>
    );
};

export default PersonalAttributes;
