import { Button } from "@/components/ui/button";
import { Pill, RotateCcw } from "lucide-react";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/70"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
            alt="Mercer Island Pharmacy" 
            className="w-auto h-32 md:h-40 mx-auto mb-6 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent leading-tight animate-fade-in delay-150">
          Your Health, Our Priority
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90 animate-fade-in delay-300">
          Your trusted neighborhood pharmacy providing personalized care, expert advice, 
          and comprehensive health services for over 25 years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-4 text-lg font-medium inline-flex items-center gap-2"
          >
            <Pill size={20} /> Refill Prescription
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-4 text-lg font-medium inline-flex items-center gap-2"
          >
            <RotateCcw size={20} /> Transfer Prescription
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in delay-700">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">25+</div>
            <div className="text-white/80 font-medium">Years of Service</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">24/7</div>
            <div className="text-white/80 font-medium">Online Refills</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">5000+</div>
            <div className="text-white/80 font-medium">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;