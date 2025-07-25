import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pharmacy-blue/80 to-pharmacy-green/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <img 
          src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
          alt="Mercer Island Pharmacy" 
          className="w-auto h-32 md:h-40 mx-auto mb-6"
        />
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Your trusted neighborhood pharmacy providing personalized care, expert advice, 
          and comprehensive health services for over 25 years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-pharmacy-blue hover:bg-white/90 px-8 py-4 text-lg font-medium"
          >
            Refill Prescription
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-pharmacy-blue hover:bg-white/90 px-8 py-4 text-lg font-medium"
          >
            Transfer Prescription
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white/80">Years of Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Online Refills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5000+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;