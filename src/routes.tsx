import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderHome';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import MaintenancePage from './pages/MaintenancePage';
import HomePage from './pages/HomePage';
import LoadingSpinner from './components/Loading';
import { useConfig } from './commons/context/ConfigContext';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
    const { isLoading, maintenanceActive } = useConfig();
    return (
        <BrowserRouter>
            {isLoading ? (
                <LoadingSpinner size="xl" color="teal.500" />
            ) : (
                <Flex direction="column" minH="100vh">
                    <Header />
                    <Box as="main">
                        <Routes>
                            <Route path="/" element={maintenanceActive ? <MaintenancePage /> : <HomePage />} />
                            <Route path="/about" element={maintenanceActive ? <MaintenancePage /> : <AboutPage />} />
                            <Route path="/contact" element={maintenanceActive ? <MaintenancePage /> : <ContactPage />} />
                            <Route path="*" element={maintenanceActive ? <MaintenancePage /> : <NotFoundPage />} />
                        </Routes>
                    </Box>
                    <Footer />
                </Flex>
            )}
        </BrowserRouter>
    );
};

export default AppRoutes;
