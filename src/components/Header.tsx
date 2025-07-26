import { Button } from "@/components/ui/button";
import { Pill, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="container mx-auto px-6 sm:px-8 py-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group p-4">
          <img 
            src="/lovable-uploads/3f657a42-0227-4eae-9912-82e734da7787.png" 
            alt="Mercer Island Pharmacy Logo" 
            className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
            size="sm"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="https://patient.rxlocal.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Pill size={16} /> <span className="hidden xl:inline">Refill Prescription</span><span className="xl:hidden">Refill</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-background/95 backdrop-blur-xl">
            <nav className="container mx-auto px-6 sm:px-8 py-8 space-y-4">
            <button 
              onClick={() => {
                handleSectionClick('services');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <Link 
              to="/shop" 
              onClick={() => {
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Shop
            </Link>
            <button 
              onClick={() => {
                handleSectionClick('about');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleSectionClick('contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
            >
              <a href="https://patient.rxlocal.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                <Pill size={16} /> Refill Prescription
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;