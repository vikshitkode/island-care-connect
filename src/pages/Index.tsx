import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CovidFluBanner from "@/components/CovidFluBanner";
import Services from "@/components/Services";
// import About from "@/components/About"; // Hidden per user request
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CovidFluBanner />
      <Services />
      {/* <About /> */} {/* Hidden per user request */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
