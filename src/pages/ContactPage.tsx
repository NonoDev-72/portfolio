import { Spacer, Heading, Text, Box, FormControl, FormLabel, Input, Textarea, Button, VStack, useColorModeValue, HStack } from "@chakra-ui/react";
import { useTranslation } from "../commons/hooks/useTranslation";
import { useToast } from "@chakra-ui/react";
import React from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
    const { t } = useTranslation();
    const toast = useToast();

    // Form state
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const serviceID = "service_fcag3qq";
        const templateID = "template_ibcql3p";
        const userID = "PPAOui1c36vy6xzog";

        emailjs.send(serviceID, templateID, form, userID)
            .then(() => {
                setLoading(false);
                toast({
                    title: t('contact.sentTitle') || "Message sent!",
                    description: t('contact.sentDescription') || "Thank you for contacting me. I will reply soon.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                });
                setForm({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setLoading(false);
                toast({
                    title: "Error",
                    description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                });
            });
    };

    return (
        <>
            <Spacer h={20} />
            <Heading>{t('contact.title')}</Heading>
            <Spacer h={10} />
            <Text>{`${t('contact.description')}`}</Text>
            <Spacer h={4} />
            <Box mx="auto" w="100%" bg="transparent" p={8} borderRadius="lg" boxShadow="md">
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>{t('contact.formName') || "Name"}</FormLabel>
                            <Input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder={t('contact.formNamePlaceholder') || "Your name"}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>{t('contact.formEmail') || "Email"}</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder={t('contact.formEmailPlaceholder') || "your@email.com"}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>{t('contact.formMessage') || "Message"}</FormLabel>
                            <Textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t('contact.formMessagePlaceholder') || "Write your message here..."}
                                rows={5}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={loading}
                            _hover={{ bg: useColorModeValue("brand.accentDark", "brand.neonDark") }}
                            w="50%"
                        >
                            {t('contact.formSend') || "Send"}
                        </Button>
                    </VStack>
                </form>
            </Box>
            <Spacer h={10} />

            <HStack spacing={2}>
                <Text>{`${t('contact.description2')}`}</Text>
                <Text
                    as="span"
                    color={useColorModeValue("brand.accent", "brand.neon")}
                    _hover={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                        navigator.clipboard.writeText(t('contact.email'));
                        toast({
                            title: t('contact.copied'),
                            description: t('contact.copiedInfo'),
                            status: "info",
                            duration: 3000,
                            isClosable: true,
                            position: "bottom-right",
                        });
                    }}
                >
                    {t('contact.email')}
                </Text>
            </HStack>
            
            {/*
            Campos del formulario:
            - name: El nombre de la persona que envía el mensaje.
            - email: El correo electrónico del remitente, para poder responderle.
            - message: El contenido del mensaje que la persona quiere enviarte.

            Campos de EmailJS:
            - serviceID: Identificador del servicio de EmailJS que has configurado (ejemplo: "service_xxxxx").
            - templateID: Identificador de la plantilla de EmailJS que usas para el correo (ejemplo: "template_xxxxx").
            - userID: Tu identificador de usuario de EmailJS (ejemplo: "user_xxxxx").
            */}
        </>
    );
};

export default ContactPage;
