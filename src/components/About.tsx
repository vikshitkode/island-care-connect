import { Card, CardContent } from "@/components/ui/card";
import { Users, Pill, Stethoscope, FlaskConical, HeartPulse, Clipboard, Shield } from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "Alex Rodriguez", role: "Licensed Pharmacist", icon: Pill },
    { name: "Taylor Kim", role: "Certified Technician", icon: Stethoscope },
    { name: "Jordan Smith", role: "Certified Technician", icon: FlaskConical },
    { name: "Casey Brown", role: "Licensed Pharmacist", icon: HeartPulse },
    { name: "Morgan Davis", role: "Certified Technician", icon: Clipboard },
    { name: "Riley Johnson", role: "Certified Technician", icon: Shield }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Users size={60} className="text-primary mx-auto mb-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            About Mercer Island Pharmacy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Mercer Island Pharmacy has been a cornerstone of healthcare in our community. 
            We pride ourselves on providing personalized pharmaceutical care with a focus on building 
            lasting relationships with our patients.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Head Pharmacist Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
              src="/lovable-uploads/c2c85c65-849b-4999-a522-0a45ebd293e9.png" 
              alt="Head Pharmacist" 
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover object-center border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                Pharmacist
              </div>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mt-6 sm:mt-8 mb-3">Sripriya Chellappan</h3>
          <p className="text-base sm:text-lg text-muted-foreground">15+ Years Experience • PharmD, RPh</p>
        </div>

        {/* Auto-scrolling Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-12">Our Expert Team</h3>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-background to-accent/5 p-8">
            <div className="flex animate-[slide-left_25s_linear_infinite] space-x-12">
              {[...teamMembers, ...teamMembers].map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div key={index} className="flex-shrink-0 text-center group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <IconComponent size={48} className="text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats and Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="group bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/30 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">Licensed Pharmacists</div>
            </CardContent>
          </Card>
          
          <Card className="group bg-gradient-to-br from-accent/10 via-background to-accent/5 border-accent/30 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">Certified Technicians</div>
            </CardContent>
          </Card>
          
          <Card className="group bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/30 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">Prescriptions Filled</div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default About;