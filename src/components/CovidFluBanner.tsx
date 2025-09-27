import { Syringe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CovidFluBanner = () => {
  const handleBookAppointment = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl shadow-2xl border border-primary/20 relative overflow-hidden p-8 lg:p-12 hover:shadow-3xl transition-all duration-500 group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_4s_ease-in-out_infinite] opacity-80"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-4 left-8 w-12 h-12 border border-white rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute bottom-4 right-8 w-16 h-16 border border-white rounded-full animate-pulse delay-1000 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute top-3/4 left-3/4 w-8 h-8 border border-white rounded-full animate-pulse delay-700 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 animate-pulse">
                    <Syringe size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center gap-2 animate-fade-in">
                    <Star size={20} className="text-yellow-300 fill-yellow-300 animate-pulse" />
                    <span className="text-base font-medium text-white/90">Latest Available</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  COVID & Flu Shots Now Available
                </h3>
                <p className="text-base lg:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Protect yourself and your loved ones with the latest vaccines. We offer both updated COVID-19 boosters and seasonal flu shots to keep you healthy year-round.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center text-white group-hover:transform group-hover:scale-105 transition-all duration-300 delay-100">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse hover:bg-white/30 transition-colors duration-300">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <h4 className="font-semibold mb-2">Updated Formulas</h4>
                  <p className="text-sm text-white/80">Latest CDC-approved vaccines for maximum protection</p>
                </div>
                <div className="text-center text-white group-hover:transform group-hover:scale-105 transition-all duration-300 delay-200">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse hover:bg-white/30 transition-colors duration-300">
                    <span className="text-lg font-bold">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Quick & Easy</h4>
                  <p className="text-sm text-white/80">Walk-ins welcome or schedule your appointment</p>
                </div>
                <div className="text-center text-white group-hover:transform group-hover:scale-105 transition-all duration-300 delay-300">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse hover:bg-white/30 transition-colors duration-300">
                    <span className="text-lg font-bold">🛡️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Insurance Covered</h4>
                  <p className="text-sm text-white/80">Most insurance plans accepted</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleBookAppointment}
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
                >
                  Book Your Appointment Today
                </Button>
                <p className="text-sm text-white/80 mt-3">
                  Call us or walk in during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidFluBanner;