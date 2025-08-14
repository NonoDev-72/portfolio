import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderHome';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import MaintenancePage from './pages/MaintenancePage';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Flex direction="column" minH="100vh">
                <Header />
                <Box flex="1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Box>
                <Footer />
            </Flex>
        </BrowserRouter>
    );
};

export default AppRoutes;
