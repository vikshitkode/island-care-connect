import { Link } from "react-router-dom";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const MedicationTherapy = () => {
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
            <ClipboardList size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Medication Therapy Management</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive medication reviews to optimize your therapy and prevent drug interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Our MTM Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comprehensive medication review</li>
                <li>• Drug interaction screening</li>
                <li>• Dosage optimization</li>
                <li>• Side effect management</li>
                <li>• Medication adherence support</li>
                <li>• Cost-saving opportunities</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Who Benefits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Patients taking multiple medications</li>
                <li>• Those with chronic conditions</li>
                <li>• People experiencing side effects</li>
                <li>• Anyone wanting to optimize therapy</li>
                <li>• Patients with medication questions</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Schedule your medication therapy consultation today!
            </p>
            <Link to="/#contact">
              <Button size="lg">Book Consultation</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MedicationTherapy;