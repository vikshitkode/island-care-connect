import { Syringe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CovidFluBanner = () => {
  const navigate = useNavigate();
  
  const handleBookAppointment = () => {
    navigate('/services/immunizations');
  };

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl shadow-2xl border border-primary/20 relative overflow-hidden p-8 lg:p-12">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-8 w-12 h-12 border border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-8 w-16 h-16 border border-white rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-500"></div>
              <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Syringe size={32} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-300 fill-yellow-300" />
                    <span className="text-base font-medium text-white/90">Latest Available</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
                  COVID & Flu Shots Now Available
                </h3>
                <p className="text-base lg:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Protect yourself and your loved ones with the latest vaccines. We offer both updated COVID-19 boosters and seasonal flu shots to keep you healthy year-round.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <h4 className="font-semibold mb-2">Updated Formulas</h4>
                  <p className="text-sm text-white/90">Latest CDC-approved vaccines for maximum protection</p>
                </div>
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Quick & Easy</h4>
                  <p className="text-sm text-white/90">Walk-ins available or Pre fill a form and walk-in</p>
                </div>
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">🛡️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Insurance Covered</h4>
                  <p className="text-sm text-white/90">Most insurance plans accepted</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleBookAppointment}
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get your Shot today
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