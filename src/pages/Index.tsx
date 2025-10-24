import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Commitments from "@/components/Commitments";
import ClientLogos from "@/components/ClientLogos";
import Careers from "@/components/Careers";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Commitments />
      <ClientLogos />
      <Careers />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
