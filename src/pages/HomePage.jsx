import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import KeyActivities from '../components/KeyActivities';
import WhyUs from '../components/WhyUs';
import ISOCertifications from '../components/ISOCertifications';
import ClientsMarquee from '../components/ClientsMarquee';
import CTABand from '../components/CTABand';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <KeyActivities />
      <WhyUs />
      <ISOCertifications />
      <ClientsMarquee />
      <CTABand />
      <Contact />
    </>
  );
}
