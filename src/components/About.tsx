import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Mercer Island Pharmacy</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 1998, Mercer Island Pharmacy has been a cornerstone of healthcare in our community. 
              We pride ourselves on providing personalized pharmaceutical care with a focus on building 
              lasting relationships with our patients.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experienced team of pharmacists and technicians are committed to ensuring you receive 
              the highest quality care, whether you're managing a chronic condition or simply need advice 
              on over-the-counter medications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-pharmacy-blue-light border-pharmacy-blue/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-pharmacy-blue mb-2">Licensed</div>
                  <div className="text-sm text-pharmacy-blue/80">Pharmacists</div>
                </CardContent>
              </Card>
              <Card className="bg-pharmacy-green-light border-pharmacy-green/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-pharmacy-green mb-2">Certified</div>
                  <div className="text-sm text-pharmacy-green/80">Immunizers</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-pharmacy-blue/5 to-pharmacy-green/5 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional pharmaceutical care and health services that enhance the 
                  well-being of our community through personalized attention, expert knowledge, 
                  and innovative solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-pharmacy-green/5 to-pharmacy-blue/5 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pharmacy-blue rounded-full mr-3"></span>
                    Compassionate, patient-centered care
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pharmacy-green rounded-full mr-3"></span>
                    Integrity in all our interactions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pharmacy-blue rounded-full mr-3"></span>
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pharmacy-green rounded-full mr-3"></span>
                    Community health advocacy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;