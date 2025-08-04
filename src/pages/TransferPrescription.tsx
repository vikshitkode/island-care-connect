import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, User, Phone, Building2, Pill, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const TransferPrescription: React.FC = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    currentPharmacy: "",
    currentPharmacyPhone: "",
    medications: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.dateOfBirth || 
        !formData.currentPharmacy || !formData.currentPharmacyPhone || !formData.medications) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert the transfer request into Supabase
      const { error } = await supabase
        .from('transfer_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email || null,
          date_of_birth: formData.dateOfBirth || null,
          current_pharmacy: formData.currentPharmacy,
          current_pharmacy_phone: formData.currentPharmacyPhone || null,
          medications: formData.medications || null,
          notes: formData.notes || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Transfer Request Submitted!",
        description: "Your request has been received. We'll contact you within 24 hours to complete your prescription transfer.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        currentPharmacy: "",
        currentPharmacyPhone: "",
        medications: "",
        notes: ""
      });

    } catch (error) {
      console.error('Error submitting transfer request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <RotateCcw size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              Transfer Your Prescription
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Make the switch to Mercer Island Pharmacy easy. We'll handle the transfer process for you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Show options or form based on state */}
          {!showForm ? (
            // Two Options Section
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Choose How You'd Like to Transfer</h2>
                <p className="text-muted-foreground">Select the option that works best for you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Call Option */}
                <Card className="bg-gradient-to-br from-accent/10 via-background to-accent/5 border-accent/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                      <PhoneCall size={40} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl text-accent">Give Us a Call</CardTitle>
                    <CardDescription className="text-base">
                      Speak directly with our pharmacy team for immediate assistance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="bg-accent/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-accent mb-2">Why call us?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Immediate assistance</li>
                          <li>• Personal consultation</li>
                          <li>• Answer all your questions</li>
                          <li>• Faster processing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">Monday - Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 2:00 PM and Sunday is Closed</p>
                      <Button 
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-3 text-lg"
                      >
                        <a href="tel:+12066473784" className="inline-flex items-center gap-2">
                          <PhoneCall size={20} />
                          Call (206) 647-3784
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Form Option */}
                <Card className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                      <FileText size={40} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary">Fill Out Our Form</CardTitle>
                    <CardDescription className="text-base">
                      Complete our online form at your convenience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Why use the form?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Available 24/7</li>
                          <li>• Take your time</li>
                          <li>• No phone calls needed</li>
                          <li>• Secure and private</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">We'll contact you within 24 hours</p>
                      <Button 
                        onClick={() => setShowForm(true)}
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-3 text-lg"
                      >
                        <FileText size={20} className="mr-2" />
                        Start Online Form
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // Form Section
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Back to Options Button */}
              <div className="lg:col-span-3 mb-4">
                <Button 
                  onClick={() => setShowForm(false)}
                  variant="outline"
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back to Options
                </Button>
              </div>

              {/* Transfer Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <FileText className="text-primary" size={28} />
                      Transfer Request Form
                    </CardTitle>
                    <CardDescription>
                      Fill out the information below and we'll process your prescription transfer request.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <User className="text-primary" size={20} />
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
                          <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Current Pharmacy Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Building2 className="text-primary" size={20} />
                          Current Pharmacy Information
                        </h3>
                        <div>
                          <Label htmlFor="currentPharmacy">Current Pharmacy Name & Address <span className="text-red-500">*</span></Label>
                          <Input
                            id="currentPharmacy"
                            name="currentPharmacy"
                            value={formData.currentPharmacy}
                            onChange={handleInputChange}
                            placeholder="e.g., CVS Pharmacy, 123 Main St, Seattle, WA"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="currentPharmacyPhone">Current Pharmacy Phone Number <span className="text-red-500">*</span></Label>
                          <Input
                            id="currentPharmacyPhone"
                            name="currentPharmacyPhone"
                            type="tel"
                            value={formData.currentPharmacyPhone}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Medication Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Pill className="text-primary" size={20} />
                          Medication Information
                        </h3>
                        <div>
                          <Label htmlFor="medications">Medications to Transfer <span className="text-red-500">*</span></Label>
                          <Textarea
                            id="medications"
                            name="medications"
                            value={formData.medications}
                            onChange={handleInputChange}
                            placeholder="List the medications you'd like to transfer (or write 'All active prescriptions')"
                            rows={4}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Any special instructions or questions?"
                            rows={3}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-3 text-lg"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Transfer Request"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Information Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-sm">We'll contact your current pharmacy within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-sm">We'll verify your prescription information</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-sm">We'll text you when your prescriptions are ready</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 via-background to-primary/10 border-accent/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Phone className="text-accent" size={20} />
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about transferring your prescription? Give us a call!
                    </p>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-accent/60 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <a href="tel:+12066473784" className="inline-flex items-center gap-2">
                        <Phone size={16} />
                        Call (206) 647-3784
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TransferPrescription;