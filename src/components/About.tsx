import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Licensed Pharmacist", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face" },
    { name: "Michael Chen", role: "Certified Technician", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face" },
    { name: "Jennifer Davis", role: "Certified Technician", image: "https://images.unsplash.com/photo-1594824475952-b0b8b0b8a14a?w=150&h=150&fit=crop&crop=face" },
    { name: "Robert Martinez", role: "Licensed Pharmacist", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face" },
    { name: "Amanda Wilson", role: "Certified Technician", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face" },
    { name: "David Thompson", role: "Certified Technician", image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop&crop=face" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Mercer Island Pharmacy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 1998, Mercer Island Pharmacy has been a cornerstone of healthcare in our community. 
            We pride ourselves on providing personalized pharmaceutical care with a focus on building 
            lasting relationships with our patients.
          </p>
        </div>

        {/* Head Pharmacist Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face" 
              alt="Head Pharmacist" 
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 shadow-lg"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Head Pharmacist
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mt-6 mb-2">Dr. James Mitchell</h3>
          <p className="text-muted-foreground">25+ Years Experience • PharmD, RPh</p>
        </div>

        {/* Auto-scrolling Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Our Expert Team</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-[slide-left_20s_linear_infinite] space-x-8" style={{
              animation: 'slide-left 20s linear infinite'
            }}>
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-2 border-border shadow-md"
                  />
                  <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats and Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground font-medium">Licensed Pharmacists</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground font-medium">Certified Technicians</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default About;