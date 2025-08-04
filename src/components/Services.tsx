import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Pill, Truck, ClipboardList, Syringe, Heart, MessageCircle, Hospital } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Prescription Services",
      description: "Fast, accurate prescription filling with competitive pricing and insurance coordination.",
      icon: Pill,
      route: "/services/prescription-services"
    },
    {
      title: "Free Delivery",
      description: "Convenient free delivery service to your home or office within Mercer Island.",
      icon: Truck,
      route: "/services/free-delivery"
    },
    {
      title: "Medication Therapy Management",
      description: "Comprehensive medication reviews to optimize your therapy and prevent drug interactions.",
      icon: ClipboardList,
      route: "/services/medication-therapy"
    },
    {
      title: "Immunizations",
      description: "Full range of vaccines including flu shots, COVID-19, and travel immunizations.",
      icon: Syringe,
      route: "/services/immunizations"
    },
    {
      title: "Health Screenings",
      description: "Blood pressure monitoring, cholesterol testing, and diabetes management support.",
      icon: Heart,
      route: "/services/health-screenings"
    },
    {
      title: "Wellness Consultations",
      description: "One-on-one consultations for medication questions and health concerns.",
      icon: MessageCircle,
      route: "/services/wellness-consultations"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <Hospital size={60} className="text-primary mx-auto mb-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive healthcare services tailored to meet your unique needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">{services.map((service, index) => {
            return (
              <Card 
                key={index}
                className="group cursor-pointer bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden h-full"
                onClick={() => navigate(service.route)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-primary transition-colors duration-300 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;