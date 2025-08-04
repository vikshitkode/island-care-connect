import { Button } from "@/components/ui/button";
import { Pill, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
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
        <div className="mb-6 sm:mb-8 pt-6">
          <img 
            src="/lovable-uploads/fd933d4c-e5df-48f8-a99f-7236c85e8509.png" 
            alt="Mercer Island Pharmacy" 
            className="w-auto h-24 sm:h-32 md:h-40 lg:h-48 mx-auto mb-4 sm:mb-6 drop-shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent leading-tight animate-fade-in delay-150">
          Your Health is Our Priority
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 animate-fade-in delay-300 px-4">
          Your trusted neighborhood pharmacy providing personalized care, expert advice, 
          and comprehensive health services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-fade-in delay-500 px-4">
          <Button 
            asChild
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
          >
            <a href="https://patient.rxlocal.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Pill size={18} /> Refill Prescription
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
          >
            <Link to="/transfer-prescription" className="inline-flex items-center gap-2">
              <RotateCcw size={18} /> Transfer Prescription
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto animate-fade-in delay-700 px-4">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">24/7</div>
            <div className="text-white/80 font-medium text-sm sm:text-base">Online Refills</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Expert</div>
            <div className="text-white/80 font-medium text-sm sm:text-base">Healthcare Services</div>
          </div>
        </div>
        
        {/* Licensing Badge */}
        <div className="mt-12 sm:mt-16 animate-fade-in delay-1000 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20 inline-block">
            <p className="text-white/90 text-xs sm:text-sm font-medium text-center">
              ✓ Licensed by the Washington State Board of Pharmacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;