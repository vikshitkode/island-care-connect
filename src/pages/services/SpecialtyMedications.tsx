import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const SpecialtyMedications = () => {
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
            <div className="text-6xl mb-6">🧬</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Specialty Medications</h1>
            <p className="text-xl text-muted-foreground">
              Expert handling of complex medications requiring special storage and administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Specialty Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Temperature-controlled storage</li>
                <li>• Injectable medications</li>
                <li>• Biologic medications</li>
                <li>• Orphan drugs</li>
                <li>• Oncology medications</li>
                <li>• Rare disease treatments</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Specialized training in complex therapies</li>
                <li>• Insurance prior authorization assistance</li>
                <li>• Patient education and support</li>
                <li>• Coordination with healthcare providers</li>
                <li>• Adherence monitoring</li>
                <li>• Side effect management</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need assistance with specialty medications?
            </p>
            <Link to="/#contact">
              <Button size="lg">Get Expert Help</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialtyMedications;