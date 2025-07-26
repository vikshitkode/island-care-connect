import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/lovable-uploads/3f657a42-0227-4eae-9912-82e734da7787.png" 
            alt="Mercer Island Pharmacy Logo" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionClick('services')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </button>
          <Link 
            to="/shop" 
            onClick={() => window.scrollTo(0, 0)}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Shop
          </Link>
          <button 
            onClick={() => handleSectionClick('about')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <button 
            onClick={() => handleSectionClick('contact')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
          <Button 
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="https://patient.rxlocal.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Pill size={16} /> Refill Prescription
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;