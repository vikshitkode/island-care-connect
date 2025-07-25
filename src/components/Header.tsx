import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pharmacy-blue to-pharmacy-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">Mercer Island Pharmacy</h1>
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