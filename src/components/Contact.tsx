import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hospital, MapPin, Phone, Clock, Pill } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const hours = [
    { day: "Monday - Friday", time: "8:30 AM - 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Hospital size={60} className="text-primary mx-auto mb-6" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conveniently located in the heart of Mercer Island with ample parking and easy access
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-foreground group-hover:text-primary transition-colors">
                <MapPin className="mr-3 text-primary" size={24} />
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
                <span className="text-sm text-primary font-medium">✓ Easy parking available</span>
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-foreground group-hover:text-primary transition-colors">
                <Phone className="mr-3 text-primary" size={24} />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium">Phone:</span> (206) 622-6094<br />
                <span className="font-medium">Email:</span> mercerislandpharmacy@gmail.com
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-foreground group-hover:text-primary transition-colors">
                <Clock className="mr-3 text-primary" size={24} />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-primary/5 transition-colors">
                    <span className="text-muted-foreground font-medium">{schedule.day}</span>
                    <span className="text-foreground font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/20 via-background to-accent/20 border-2 border-primary/20 backdrop-blur-lg shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <CardContent className="p-10">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Pill size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
                Need a Prescription Refill?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Save time by ordering your refills online or give us a call. 
                We'll have your medications ready for pickup!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href="tel:+12066226094">Order Refill by Phone</a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-2 border-primary/60 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to="/transfer-prescription">Transfer Prescription</Link>
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