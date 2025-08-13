// MaintenancePage.jsx
import {
    Box,
    Heading,
    Text,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaTools, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useConfig } from '../commons/context/ConfigContext';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const MaintenancePage = () => {
    const iconColor = useColorModeValue('orange.400', 'orange.300');
    const { setMaintenanceActive } = useConfig();

    useEffect(() => {
        setMaintenanceActive(true);
        return () => {
            setMaintenanceActive(false);
        };
    }, [setMaintenanceActive]);

    return (
        <MotionBox
            textAlign="center"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={10}
            px={6}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <Icon as={FaTools} boxSize={'50px'} color={iconColor} />
            </motion.div>

            <MotionHeading
                as="h2"
                size="xl"
                mt={6}
                mb={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Página en mantenimiento
            </MotionHeading>

            <MotionText
                color={'gray.500'}
                mb={6}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Estamos trabajando para ajustar la web. Vuelve más tarde.
            </MotionText>
        </MotionBox>
    );
};

export default MaintenancePage;
