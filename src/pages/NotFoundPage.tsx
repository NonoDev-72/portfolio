import { Box, Heading, Text, Button, VStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useConfig } from '../commons/context/ConfigContext';
import { useTranslation } from '../commons/hooks/useTranslation';
import BlueprintFrame from '../components/landing/BlueprintFrame';

const MotionBox = motion(Box);

const NotFoundPage = () => {
    const { t } = useTranslation();
    const accent = useColorModeValue('brand.accent', 'brand.neon');
    const { setNotFoundActive } = useConfig();

    useEffect(() => {
        setNotFoundActive(true);
        return () => { setNotFoundActive(false); };
    }, [setNotFoundActive]);

    return (
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center" px={6}>
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <BlueprintFrame p={10} textAlign="center" maxW="480px">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <Icon as={WarningIcon} boxSize="42px" color={accent} />
                    </motion.div>
                    <Heading as="h2" fontSize="clamp(28px, 4vw, 40px)" textTransform="uppercase" mt={6} mb={3}>
                        {t('states.404.title')}
                    </Heading>
                    <Text mb={8} opacity={0.75}>
                        {t('states.404.body')}
                    </Text>
                    <VStack spacing={4}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button as="a" href="/" variant="solid" leftIcon={<FaHome />}>
                                {t('states.404.cta')}
                            </Button>
                        </motion.div>
                    </VStack>
                </BlueprintFrame>
            </MotionBox>
        </Box>
    );
};

export default NotFoundPage;
