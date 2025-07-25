import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const hours = [
    { day: "Monday - Friday", time: "8:30 AM - 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Visit Us Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in the heart of Mercer Island with ample parking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <span className="mr-3">📍</span>
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                <a 
                  href="https://maps.google.com/?q=2703+76th+Ave+SE,+Mercer+Island,+WA+98040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  2703 76th Ave SE<br />
                  Mercer Island, WA 98040
                </a><br />
                <span className="text-sm text-pharmacy-blue">Easy parking available</span>
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <span className="mr-3">📞</span>
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Phone: (206) 622-6094<br />
                Email: mercerislandpharmacy@gmail.com
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <span className="mr-3">🕐</span>
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="text-foreground font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-pharmacy-blue/10 to-pharmacy-green/10 border-pharmacy-blue/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Need a Prescription Refill?</h3>
              <p className="text-muted-foreground mb-6">
                Save time by ordering your refills online or give us a call. 
                We'll have your medications ready for pickup!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-pharmacy-blue hover:bg-pharmacy-blue/90">
                  Order Refill Online
                </Button>
                <Button variant="outline" className="border-pharmacy-blue text-pharmacy-blue hover:bg-pharmacy-blue hover:text-white">
                  Call for Refill
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;