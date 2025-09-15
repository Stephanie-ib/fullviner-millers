import Header from './components/Header';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import CropProduction from './components/CropProduction';
import GreenhouseOperations from './components/Greenhouse';
import StatsSection from './components/StatsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CropProduction />
        <CommunitySection />
        <GreenhouseOperations />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App