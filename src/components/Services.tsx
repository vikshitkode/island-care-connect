import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Prescription Services",
      description: "Fast, accurate prescription filling with competitive pricing and insurance coordination.",
      icon: "💊"
    },
    {
      title: "Free Delivery",
      description: "Convenient free delivery service to your home or office within Mercer Island.",
      icon: "🚚"
    },
    {
      title: "Medication Therapy Management",
      description: "Comprehensive medication reviews to optimize your therapy and prevent drug interactions.",
      icon: "📋"
    },
    {
      title: "Immunizations",
      description: "Full range of vaccines including flu shots, COVID-19, and travel immunizations.",
      icon: "💉"
    },
    {
      title: "Health Screenings",
      description: "Blood pressure monitoring, cholesterol testing, and diabetes management support.",
      icon: "🩺"
    },
    {
      title: "Specialty Medications",
      description: "Expert handling of complex medications requiring special storage and administration.",
      icon: "🧬"
    },
    {
      title: "Wellness Consultations",
      description: "One-on-one consultations for medication questions and health concerns.",
      icon: "💬"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pharmacy services designed to support your health and wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;