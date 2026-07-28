import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import RippleDivider from "./components/RippleDivider";
import Pricing from "./components/Pricing";
import Safety from "./components/Safety";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        <RippleDivider tone="navy" />
        <Pricing />
        <RippleDivider tone="navy" />

        <Gallery />

        <RippleDivider tone="navy" />
      
        <WhyChooseUs />
        <Safety />
        <RippleDivider tone="navy" />

        <Testimonials />
        <FAQ />

        <RippleDivider tone="navy" />
        <Booking />
        <RippleDivider tone="navy" />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
