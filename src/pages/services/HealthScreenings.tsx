import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const HealthScreenings = () => {
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
            <Heart size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Health Screenings</h1>
            <p className="text-xl text-muted-foreground">
              Blood pressure monitoring, cholesterol testing, and diabetes management support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Screening Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Blood pressure monitoring</li>
                <li>• BMI calculations</li>
                <li>• Heart rate monitoring</li>
                <li>• Basic health assessments</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Diabetes Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Medication management</li>
                <li>• Lifestyle counseling</li>
                <li>• Insulin injection training</li>
                <li>• Regular check-ins</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Take charge of your health today!
            </p>
            <Link to="/#contact">
              <Button size="lg">Schedule Screening</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthScreenings;