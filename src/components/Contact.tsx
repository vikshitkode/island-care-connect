import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const hours = [
    { day: "Monday - Friday", time: "8:30 AM - 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-6xl">🏥</span>
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
                <span className="mr-3 text-2xl">📍</span>
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
                <span className="mr-3 text-2xl">📞</span>
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
                <span className="mr-3 text-2xl">🕐</span>
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
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-card/90 to-secondary/10 border-primary/30 backdrop-blur-sm shadow-xl">
            <CardContent className="p-10">
              <div className="mb-6">
                <span className="text-4xl">💊</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Need a Prescription Refill?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Save time by ordering your refills online or give us a call. 
                We'll have your medications ready for pickup!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Order Refill Online
                </Button>
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
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