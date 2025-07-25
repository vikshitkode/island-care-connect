import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
            alt="Mercer Island Pharmacy Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Button variant="default" className="bg-pharmacy-blue hover:bg-pharmacy-blue/90">
            Refill Prescription
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;