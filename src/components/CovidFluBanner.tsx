import { Syringe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CovidFluBanner = () => {
  const handleBookAppointment = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 lg:py-8 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-2 left-10 w-12 h-12 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-10 w-16 h-16 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 text-white text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Syringe size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <Star size={16} className="text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-medium text-white/90">Latest Available</span>
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                COVID & Flu Shots Now Available
              </h3>
              <p className="text-sm text-white/90 mt-1">
                Protect yourself and your family with the latest vaccines
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button 
                onClick={handleBookAppointment}
                variant="secondary" 
                size="default"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidFluBanner;