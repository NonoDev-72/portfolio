import React from 'react';
import {
    Box,
    Wrap,
    WrapItem,
    Flex,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    SiKotlin,
    SiSwift,
    SiFirebase,
    SiSpringboot,
    SiTypescript,
    SiPostgresql,
    SiJetpackcompose, SiJavascript, SiSharp, SiCplusplus
} from 'react-icons/si';
import {
    FaJava,
    FaReact,
    FaGitAlt,
    FaPython,
    FaGithub,
    FaDocker,
} from 'react-icons/fa';
import { useTranslation } from '../commons/hooks/useTranslation';

const technologies = [
    { name: 'Kotlin', color: '#A97BFF', icon: 'SiKotlin', url: 'https://kotlinlang.org/docs/home.html' },
    { name: 'Java', color: '#ED8B00', icon: 'FaJava', url: 'https://docs.oracle.com/en/java/' },
    { name: 'Swift', color: '#FA7343', icon: 'SiSwift', url: 'https://developer.apple.com/documentation/swift' },
    { name: 'React Native', color: '#61DAFB', icon: 'FaReact', url: 'https://reactnative.dev/docs/getting-started' },
    { name: 'React', color: '#0499c3ff', icon: 'FaReact', url: 'https://es.react.dev/' },
    { name: 'Firebase', color: '#FFCA28', icon: 'SiFirebase', url: 'https://firebase.google.com/docs' },
    { name: 'Git', color: '#F1502F', icon: 'FaGitAlt', url: 'https://git-scm.com/doc' },
    { name: 'Python', color: '#3776AB', icon: 'FaPython', url: 'https://docs.python.org/3/' },
    { name: 'Spring Boot', color: '#6DB33F', icon: 'SiSpringboot', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
    { name: 'TypeScript', color: '#3178C6', icon: 'SiTypescript', url: 'https://www.typescriptlang.org/docs/' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'SiJavascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'PostgreSQL', color: '#336791', icon: 'SiPostgresql', url: 'https://www.postgresql.org/docs/' },
    { name: 'GitHub', color: '#181717', icon: 'FaGithub', url: 'https://docs.github.com/' },
    { name: 'Jetpack Compose', color: '#4285F4', icon: 'SiJetpackcompose', url: 'https://developer.android.com/jetpack/compose/documentation' },
    { name: 'Docker', color: '#2496ED', icon: 'FaDocker', url: 'https://docs.docker.com/' },
    { name: 'C#', color: '#9B4F96', icon: 'SiSharp', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'C++', color: '#00599C', icon: 'SiCplusplus', url: 'https://cplusplus.com/doc/tutorial/' },
];


const iconMap = {
    SiKotlin,
    FaJava,
    SiSwift,
    FaReact,
    SiFirebase,
    FaGitAlt,
    FaPython,
    SiSpringboot,
    SiTypescript,
    SiPostgresql,
    FaGithub,
    SiJetpackcompose,
    FaDocker,
    SiJavascript, 
    SiSharp,
    SiCplusplus
};

const Skills = () => {
    const { t } = useTranslation();
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');
    const pageBg = useColorModeValue('brand.light', 'brand.dark');
    const text = useColorModeValue('brand.dark', 'brand.light');

    return (
        <Box flex="1.6" minW="300px">
            <Wrap spacing={3}>
                {technologies.map(({ name, icon, url }) => {
                    const IconComponent = iconMap[icon];
                    return (
                        <WrapItem key={name}>
                            <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
                                <Flex
                                    align="center"
                                    gap={2}
                                    px={4}
                                    py={3}
                                    border="1px solid"
                                    borderColor={divider}
                                    color={text}
                                    transition="background .25s ease, color .25s ease, transform .25s ease"
                                    _hover={{ bg: accent, color: pageBg, transform: 'translateY(-2px)' }}
                                >
                                    {IconComponent && <Box as={IconComponent} boxSize="18px" />}
                                    <Text fontSize="14px" fontWeight="medium" lineHeight="1">
                                        {name}
                                    </Text>
                                </Flex>
                            </Link>
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Box>
    );
};

export default Skills;
