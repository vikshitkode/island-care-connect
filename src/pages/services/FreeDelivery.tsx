import { Link } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const FreeDelivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Truck size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Free Delivery</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Convenient free delivery service to your home or office.
            </p>
            <p className="text-lg font-semibold text-primary">
              Available exclusively within Mercer Island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free delivery within Mercer Island</li>
                <li>• Same-day delivery available</li>
                <li>• Scheduled delivery options</li>
                <li>• Secure medication handling</li>
                <li>• Delivery to home or office</li>
                <li>• Contactless delivery available</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Call or visit us to request delivery</li>
                <li>2. We'll schedule a convenient time</li>
                <li>3. Your medications are securely packaged</li>
                <li>4. We deliver directly to your door</li>
                <li>5. Receive your medications safely</li>
              </ol>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to schedule your free delivery?
            </p>
            <a href="tel:+12066473784">
              <Button size="lg">Give us a Call</Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreeDelivery;