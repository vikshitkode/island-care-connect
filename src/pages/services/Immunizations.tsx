import { Link } from "react-router-dom";
import { ArrowLeft, Syringe, FileText, ClipboardEdit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Immunizations = () => {
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
            <Syringe size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Get Your COVID & Flu Shot</h1>
            <p className="text-xl text-muted-foreground">
              Choose your preferred option to get vaccinated today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardEdit size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Visit & Fill Out Form</h3>
                <p className="text-muted-foreground mb-6">
                  Walk into our pharmacy and fill out the vaccination form on-site. Quick and convenient.
                </p>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No appointment needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fill form at the pharmacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Get vaccinated immediately</span>
                </li>
              </ul>
              <Link to="/#contact" className="block">
                <Button size="lg" className="w-full">
                  Visit Us Today
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Prefill Form & Visit</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the vaccination form online before your visit to save time at the pharmacy.
                </p>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Complete form from home</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Save time at pharmacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Faster vaccination process</span>
                </li>
              </ul>
              <Link to="/#contact" className="block">
                <Button size="lg" className="w-full">
                  Fill Form Online
                </Button>
              </Link>
            </Card>
          </div>

          <div className="bg-card p-6 rounded-lg border mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Available Vaccines</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>• COVID-19 vaccines & boosters</li>
                <li>• Annual flu shots</li>
                <li>• Shingles vaccine</li>
                <li>• Pneumonia vaccine</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HPV vaccine</li>
                <li>• Tdap (Tetanus, Diphtheria, Pertussis)</li>
                <li>• Hepatitis A & B</li>
                <li>• Travel immunizations</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Immunizations;