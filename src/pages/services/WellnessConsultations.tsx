import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const WellnessConsultations = () => {
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
            <MessageCircle size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Wellness Consultations</h1>
            <p className="text-xl text-muted-foreground">
              One-on-one consultations for medication questions and health concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Consultation Topics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Medication questions & concerns</li>
                <li>• Over-the-counter recommendations</li>
                <li>• Supplement guidance</li>
                <li>• Drug interaction checks</li>
                <li>• Side effect discussions</li>
                <li>• General health concerns</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Private, confidential consultations</li>
                <li>• Experienced pharmacist guidance</li>
                <li>• Personalized recommendations</li>
                <li>• Follow-up support available</li>
                <li>• No appointment necessary for quick questions</li>
                <li>• Scheduled consultations for complex issues</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Have questions about your health or medications?
            </p>
            <Link to="/#contact">
              <Button size="lg">Schedule Consultation</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WellnessConsultations;