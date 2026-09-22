import Hero from '../components/landing/Hero';
import StatsBand from '../components/landing/StatsBand';
import Timeline from '../components/Timeline';
import StackSection from '../components/landing/StackSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <StatsBand />
            <Timeline />
            <StackSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
