import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problems from "@/components/landing/Problems";
import Program from "@/components/landing/Program";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import Includes from "@/components/landing/Includes";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
const Index = () => {
  return <main className="min-h-screen">
      
      <Hero />
      <Problems />
      <Program />
      <About />
      <Testimonials />
      <Includes />
      <FAQ />
      <Footer />
    </main>;
};
export default Index;