import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Immunizations = () => {
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
            <div className="text-6xl mb-6">💉</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Immunizations</h1>
            <p className="text-xl text-muted-foreground">
              Full range of vaccines including flu shots, COVID-19, and travel immunizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Available Vaccines</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Annual flu shots</li>
                <li>• COVID-19 vaccines & boosters</li>
                <li>• Shingles vaccine</li>
                <li>• Pneumonia vaccine</li>
                <li>• Travel vaccines</li>
                <li>• Tdap (Tetanus, Diphtheria, Pertussis)</li>
                <li>• Hepatitis A & B</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Our Process</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Walk-ins welcome (subject to availability)</li>
                <li>• Appointments recommended</li>
                <li>• Insurance accepted</li>
                <li>• Quick & comfortable administration</li>
                <li>• Documentation provided</li>
                <li>• Follow-up care if needed</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to schedule your vaccination?
            </p>
            <Link to="/#contact">
              <Button size="lg">Schedule Vaccination</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Immunizations;