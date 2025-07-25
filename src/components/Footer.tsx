const Footer = () => {
  return (
    <footer className="bg-pharmacy-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
              alt="Mercer Island Pharmacy" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 leading-relaxed mb-4">
              Your trusted neighborhood pharmacy providing personalized care 
              and comprehensive health services since 1998.
            </p>
            <p className="text-white/80">
              Licensed by the Washington State Board of Pharmacy
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Refills</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li>(206) 622-6094</li>
              <li>2701 76th Ave SE</li>
              <li>Mercer Island, WA 98040</li>
              <li>mercerislandpharmacy@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Mercer Island Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;