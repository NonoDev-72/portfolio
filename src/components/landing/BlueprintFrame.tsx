import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BlueprintFrameProps extends BoxProps {
    children: ReactNode;
}

const Corner = ({ style, color }: { style: React.CSSProperties; color: string }) => (
    <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        style={{ position: 'absolute', ...style }}
    >
        <line x1="5.5" y1="0" x2="5.5" y2="11" stroke={color} strokeWidth="1" />
        <line x1="0" y1="5.5" x2="11" y2="5.5" stroke={color} strokeWidth="1" />
    </svg>
);

const BlueprintFrame = ({ children, ...rest }: BlueprintFrameProps) => {
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('#5980a6', '#94bce3');

    return (
        <Box position="relative" border="1px solid" borderColor={divider} borderRadius={0} {...rest}>
            <Corner color={accent} style={{ top: '-6px', left: '-6px' }} />
            <Corner color={accent} style={{ top: '-6px', right: '-6px' }} />
            <Corner color={accent} style={{ bottom: '-6px', left: '-6px' }} />
            <Corner color={accent} style={{ bottom: '-6px', right: '-6px' }} />
            {children}
        </Box>
    );
};

export default BlueprintFrame;
