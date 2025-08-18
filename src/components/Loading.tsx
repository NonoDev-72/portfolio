import { Spinner, Flex, Text } from '@chakra-ui/react';

interface LoadingSpinnerProps {
    message?: string;
    size?: string;
    color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message = '',
    size = 'xl',
    color = 'teal.500',
}) => {
    return (
        <Flex direction="column" align="center" justify="center" height="100vh">
            <Spinner size={size} color={color} />
            <Text mt={4} fontSize="lg" color="gray.600">
                {message}
            </Text>
        </Flex>
    );
};

export default LoadingSpinner;
