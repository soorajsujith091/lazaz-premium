import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import KeyActivities from './components/KeyActivities';
import WhyUs from './components/WhyUs';
import ISOCertifications from './components/ISOCertifications';
import ClientsMarquee from './components/ClientsMarquee';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingButtons />
      <main>
        <Hero />
        <About />
        <Products />
        <KeyActivities />
        <WhyUs />
        <ISOCertifications />
        <ClientsMarquee />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
