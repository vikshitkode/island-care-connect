import { Phone, MapPin, Mail, Pill, Users, PhoneCall, RotateCcw } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl translate-x-16 translate-y-16"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6 group">
              <img 
                src="/lovable-uploads/30dba14e-68dd-4b60-a1bd-3a1fcee0cbfc.png" 
                alt="Mercer Island Pharmacy" 
                className="h-16 w-auto mb-6 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              Your trusted neighborhood pharmacy providing personalized care 
              and comprehensive health services since 1998.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white/80 text-sm">
                ✓ Licensed by the Washington State Board of Pharmacy
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#services" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"><Pill size={16} /> Services</a></li>
              <li><a href="#about" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"><Users size={16} /> About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"><PhoneCall size={16} /> Contact</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"><RotateCcw size={16} /> Online Refills</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Contact Info</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="hover:text-white transition-colors cursor-pointer">(206) 622-6094</span>
              </li>
              <li>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <a 
                    href="https://maps.google.com/?q=2703+76th+Ave+SE,+Mercer+Island,+WA+98040" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    2703 76th Ave SE<br />
                    Mercer Island, WA 98040
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="hover:text-white transition-colors cursor-pointer">mercerislandpharmacy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 inline-block">
            <p className="text-white/80">&copy; 2024 Mercer Island Pharmacy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;