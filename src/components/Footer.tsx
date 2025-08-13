import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useConfig } from '../commons/context/ConfigContext';


const Footer = () => {
    const { notFoundActive, maintenanceActive } = useConfig();

    return (
        notFoundActive || maintenanceActive ? null :
        <Box
            as="footer"
            borderTop="1px solid"
            borderColor="gray.200" py={6} px={4} w="100%"
        >
            <Flex direction="column" align="center" justify="center">
                <Flex mb={3} gap={4}>
                    <Link href="https://github.com/NonoDev-72" isExternal>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FaGithub />}
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            fontSize="20px"
                        />
                    </Link>
                    <Link href="www.linkedin.com/in/juan-antonio-bedmar-gonzález-79202127b" isExternal>
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<FaLinkedin />}
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            fontSize="20px"
                        />
                    </Link>
                </Flex>
                <Text fontSize="sm" textAlign="center">
                    © {new Date().getFullYear()} - Juan Antonio Bedmar González - Todos los derechos reservados.
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
