import { Syringe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CovidFluBanner = () => {
  const handleBookAppointment = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-4 left-10 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-10 w-20 h-20 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6 text-white">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Syringe size={28} className="text-white" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <Star size={20} className="text-yellow-300 fill-yellow-300" />
                <span className="text-sm lg:text-base font-medium text-white/90">Latest Available</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                COVID & Flu Shots Now Available
              </h3>
              <p className="text-sm lg:text-base text-white/90 mt-1">
                Protect yourself and your family with the latest vaccines
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Button 
              onClick={handleBookAppointment}
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidFluBanner;