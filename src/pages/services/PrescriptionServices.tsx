import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrescriptionServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Link to="/#services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">💊</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Prescription Services</h1>
            <p className="text-xl text-muted-foreground">
              Fast, accurate prescription filling with competitive pricing and insurance coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fast prescription filling</li>
                <li>• Competitive pricing</li>
                <li>• Insurance coordination</li>
                <li>• Generic alternatives when available</li>
                <li>• Prescription transfers</li>
                <li>• Refill reminders</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-muted-foreground">
                We work with all major insurance plans and are committed to providing 
                you with the most cost-effective medication options. Our experienced 
                pharmacists ensure accuracy and safety in every prescription we fill.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need to fill a prescription? Contact us today!
            </p>
            <Link to="/#contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrescriptionServices;