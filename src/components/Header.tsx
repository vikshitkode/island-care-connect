import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
            alt="Mercer Island Pharmacy Logo" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
          <Button 
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="tel:+12066226094" className="inline-flex items-center gap-2">
              <Pill size={16} /> Refill Prescription
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;