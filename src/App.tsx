import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import FeaturedExperience from '@/components/FeaturedExperience';
import Philosophy from '@/components/Philosophy';
import Gallery from '@/components/Gallery';
import WhyChoose from '@/components/WhyChoose';
import Reviews from '@/components/Reviews';
import AppointmentCTA from '@/components/AppointmentCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Treatments />
        <FeaturedExperience />
        <Philosophy />
        <Gallery />
        <WhyChoose />
        <Reviews />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
