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
    <section id="services" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Hospital size={60} className="text-primary mx-auto mb-6" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive pharmacy services designed to support your health and wellness journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
              onClick={() => navigate(service.route)}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <service.icon size={48} className="text-primary group-hover:text-accent transition-colors duration-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-center text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;