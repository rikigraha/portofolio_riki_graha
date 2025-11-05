import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeatureSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ComparisonSection from '@/components/ComparisonSection';
import PortfolioSection from '@/components/PortofolioSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import Testimoni from '@/components/Testimoni';
import QnASection from '@/components/QnASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <TechnologiesSection />
      <ComparisonSection />
      <PortfolioSection />
      <ExperiencesSection />
      <Testimoni />
      <QnASection />
      <ContactSection />
      <Footer />
    </main>
  );
}