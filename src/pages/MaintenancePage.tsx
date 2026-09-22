import { Box, Heading, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useConfig } from '../commons/context/ConfigContext';
import { useTranslation } from '../commons/hooks/useTranslation';
import BlueprintFrame from '../components/landing/BlueprintFrame';

const MotionBox = motion(Box);

const MaintenancePage = () => {
    const { t } = useTranslation();
    const accent = useColorModeValue('brand.accent', 'brand.neon');
    const { setMaintenanceActive } = useConfig();

    useEffect(() => {
        setMaintenanceActive(true);
        return () => { setMaintenanceActive(false); };
    }, [setMaintenanceActive]);

    return (
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center" px={6}>
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <BlueprintFrame p={10} textAlign="center" maxW="480px">
                    <motion.div
                        initial={{ rotate: -45, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <Icon as={FaTools} boxSize="42px" color={accent} />
                    </motion.div>
                    <Heading as="h2" fontSize="clamp(28px, 4vw, 40px)" textTransform="uppercase" mt={6} mb={3}>
                        {t('states.maintenance.title')}
                    </Heading>
                    <Text opacity={0.75}>
                        {t('states.maintenance.body')}
                    </Text>
                </BlueprintFrame>
            </MotionBox>
        </Box>
    );
};

export default MaintenancePage;
