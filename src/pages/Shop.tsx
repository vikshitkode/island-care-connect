import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Brain, Shield, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Shop = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Nordic Naturals Ultimate Omega",
      description: "High-potency omega-3 fish oil for heart and brain health",
      price: "$39.95",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300",
      rating: 4.8,
      category: "Heart Health",
      featured: true
    },
    {
      id: 2,
      name: "Nordic Naturals Vitamin D3",
      description: "High-quality vitamin D3 for immune system support",
      price: "$24.95",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300",
      rating: 4.9,
      category: "Immune Support",
      featured: true
    },
    {
      id: 3,
      name: "Nordic Naturals ProOmega",
      description: "Professional-strength omega-3 formula",
      price: "$49.95",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300",
      rating: 4.7,
      category: "Brain Health",
      featured: true
    }
  ];

  const otcProducts = [
    {
      id: 4,
      name: "Tylenol Extra Strength",
      description: "Pain reliever and fever reducer",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300",
      rating: 4.5,
      category: "Pain Relief"
    },
    {
      id: 5,
      name: "Advil Liqui-Gels",
      description: "Fast-acting ibuprofen for pain and inflammation",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&h=300",
      rating: 4.6,
      category: "Pain Relief"
    },
    {
      id: 6,
      name: "Claritin 24-Hour",
      description: "Non-drowsy allergy relief",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ec?auto=format&fit=crop&w=400&h=300",
      rating: 4.4,
      category: "Allergy Relief"
    },
    {
      id: 7,
      name: "Pepto-Bismol",
      description: "Upset stomach and diarrhea relief",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&h=300",
      rating: 4.3,
      category: "Digestive Health"
    },
    {
      id: 8,
      name: "Mucinex DM",
      description: "Cough suppressant and expectorant",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&h=300",
      rating: 4.5,
      category: "Cold & Flu"
    },
    {
      id: 9,
      name: "Zyrtec 24-Hour",
      description: "Allergy relief tablets",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ec?auto=format&fit=crop&w=400&h=300",
      rating: 4.7,
      category: "Allergy Relief"
    },
    {
      id: 10,
      name: "Tums Ultra Strength",
      description: "Fast-acting antacid for heartburn relief",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&h=300",
      rating: 4.2,
      category: "Digestive Health"
    },
    {
      id: 11,
      name: "Benadryl Allergy",
      description: "Antihistamine for allergic reactions",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ec?auto=format&fit=crop&w=400&h=300",
      rating: 4.4,
      category: "Allergy Relief"
    },
    {
      id: 12,
      name: "Robitussin DM",
      description: "Cough suppressant and expectorant",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&h=300",
      rating: 4.3,
      category: "Cold & Flu"
    },
    {
      id: 13,
      name: "Aspirin Low Dose",
      description: "Daily heart health support",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300",
      rating: 4.6,
      category: "Heart Health"
    },
    {
      id: 14,
      name: "Sudafed PE",
      description: "Nasal congestion relief",
      price: "$12.49",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&h=300",
      rating: 4.1,
      category: "Cold & Flu"
    },
    {
      id: 15,
      name: "Dramamine Motion Sickness",
      description: "Prevention and treatment of motion sickness",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&h=300",
      rating: 4.5,
      category: "Digestive Health"
    }
  ];

  const [showAllOTC, setShowAllOTC] = useState(false);
  const displayedOTCProducts = showAllOTC ? otcProducts : otcProducts.slice(0, 6);

  const ProductCard = ({ product, featured = false }: { product: any, featured?: boolean }) => (
    <Card className={`${featured ? 'ring-2 ring-primary/30 bg-gradient-to-br from-background to-primary/5' : ''}`}>
      <CardHeader className="pb-3">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg bg-muted"
          />
          {featured && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-primary to-accent text-white">
              Featured
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
            </div>
            <Badge variant="secondary">{product.category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your Health Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Visit our store for quality over-the-counter medications and premium supplements
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>In-Store Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nordic Naturals Featured Section */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/a501b7a0-8f61-41c1-b038-bf4f563b3e19.png" 
                alt="Nordic Naturals Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium omega-3 supplements and vitamins - available in-store
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
              Visit Our Store for Nordic Naturals
            </Button>
          </div>
        </div>
      </section>

      {/* OTC Medications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Over-the-Counter Medications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential medications for common health needs - visit our store to purchase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedOTCProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary"
              onClick={() => setShowAllOTC(!showAllOTC)}
            >
              {showAllOTC ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
              {showAllOTC ? "Show Less" : "Browse More OTC Medications"}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our store or call us - our pharmacists are here to help you find the best solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <a href="tel:+12066473784" className="flex items-center">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;