import Hero from '../components/landing/Hero';
import StatsBand from '../components/landing/StatsBand';
import Timeline from '../components/Timeline';
import StackSection from '../components/landing/StackSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import { useConfig } from '../commons/context/ConfigContext';

// Each section can be switched off from App Manager with a flag of the same name.
const HomePage = () => {
    const { isBlocked } = useConfig();
    return (
        <>
            {!isBlocked('hero') && <Hero />}
            {!isBlocked('stats') && <StatsBand />}
            {!isBlocked('timeline') && <Timeline />}
            {!isBlocked('stack') && <StackSection />}
            {!isBlocked('projects') && <ProjectsSection />}
            {!isBlocked('about') && <AboutSection />}
            {!isBlocked('contact') && <ContactSection />}
        </>
    );
};

export default HomePage;
