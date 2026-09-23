import {
    Box, Grid, Heading, Text, FormControl, FormLabel, Input, Textarea, Button,
    useColorModeValue, useToast,
} from '@chakra-ui/react';
import React from 'react';
import emailjs from 'emailjs-com';
import { CopyIcon } from '@chakra-ui/icons';
import { useTranslation } from '../../commons/hooks/useTranslation';
import BlueprintFrame from './BlueprintFrame';
import Reveal from './Reveal';

const ContactSection = () => {
    const { t } = useTranslation();
    const toast = useToast();
    const divider = useColorModeValue('brand.divider', 'brand.dividerDark');
    const accent = useColorModeValue('brand.accent', 'brand.neon');

    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const serviceID = 'service_fcag3qq';
        const templateID = 'template_ibcql3p';
        const userID = 'PPAOui1c36vy6xzog';

        emailjs.send(serviceID, templateID, form, userID)
            .then(() => {
                setLoading(false);
                toast({
                    title: t('contact.sentTitle') || 'Message sent!',
                    description: t('contact.sentDescription') || 'Thank you for contacting me. I will reply soon.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-right',
                });
                setForm({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setLoading(false);
                toast({
                    title: 'Error',
                    description: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(t('contact.email'));
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
    };

    return (
        <Box as="section" id="contacto" scrollMarginTop="80px" borderTop="1px solid" borderColor={divider}>
            <Box maxW="1180px" mx="auto" px={6} py={{ base: 20, md: 32 }}>
                <Reveal>
                    <Box display="flex" alignItems="baseline" gap={4} mb={3}>
                        <Text fontSize="11px" letterSpacing=".18em" color={accent}>06</Text>
                        <Heading as="h2" fontSize="clamp(32px, 4vw, 52px)" m={0} textTransform="uppercase">
                            {t('contact.title')}
                        </Heading>
                    </Box>
                    <Text mb={10} fontSize="16px">{t('contact.description')}</Text>
                    <Grid templateColumns={{ base: '1fr', md: '1.1fr .9fr' }} gap={12} alignItems="start">
                        <Box as="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={5}>
                            <FormControl isRequired>
                                <FormLabel>{t('contact.formName')}</FormLabel>
                                <Input name="name" value={form.name} onChange={handleChange} placeholder={t('contact.formNamePlaceholder')} borderRadius={0} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>{t('contact.formEmail')}</FormLabel>
                                <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('contact.formEmailPlaceholder')} borderRadius={0} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>{t('contact.formMessage')}</FormLabel>
                                <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t('contact.formMessagePlaceholder')} rows={5} borderRadius={0} />
                            </FormControl>
                            <Button type="submit" variant="solid" alignSelf="flex-start" px={8} isLoading={loading}>
                                {t('contact.formSend')}
                            </Button>
                        </Box>
                        <BlueprintFrame p={6}>
                            <Text fontSize="15px" lineHeight="1.7">{t('contact.description2')}</Text>
                            <Button
                                onClick={copyEmail}
                                variant="outline"
                                borderColor={accent}
                                color={accent}
                                borderRadius={0}
                                mt={5}
                                w="100%"
                                justifyContent="space-between"
                                rightIcon={<CopyIcon />}
                            >
                                {t('contact.email')}
                            </Button>
                            <Text mt={3} fontSize="13px" color={accent} opacity={copied ? 1 : 0} transition="opacity .3s ease">
                                {t('contact.copied')}
                            </Text>
                        </BlueprintFrame>
                    </Grid>
                </Reveal>
            </Box>
        </Box>
    );
};

export default ContactSection;
