// NotFoundPage.jsx
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useConfig } from '../commons/context/ConfigContext';
import { use, useEffect } from 'react';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const NotFoundPage = () => {
    const navigate = useNavigate();
    const iconColor = useColorModeValue('red.500', 'red.300');
    const { setNotFoundActive } = useConfig();

    useEffect(() => {
        setNotFoundActive(true);
        return () => {
            setNotFoundActive(false);
        };
    }, [setNotFoundActive]);

    return (
        <MotionBox
            textAlign="center"
            py={10}
            px={6}
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <Icon as={WarningIcon} boxSize={'50px'} color={iconColor} />
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
                404 - Página no encontrada
            </MotionHeading>

            <MotionText
                color={'gray.500'}
                mb={6}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                La ruta que has intentado no existe. Verifica la URL o vuelve al inicio.
            </MotionText>

            <VStack spacing={4}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        leftIcon={<FaHome />}
                        bg={useColorModeValue('brand.accent', 'brand.neon')}
                        color={useColorModeValue('white', 'black')}
                        _hover={{ bg: useColorModeValue('brand.accentDark', 'brand.neonDark') }}
                        variant="solid"
                        onClick={() => navigate('/')}
                    >
                        Volver al inicio
                    </Button>
                </motion.div>
            </VStack>
        </MotionBox>
    );
};

export default NotFoundPage;
