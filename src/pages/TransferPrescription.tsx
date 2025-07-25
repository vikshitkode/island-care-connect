import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, User, Phone, Building2, Pill, FileText, Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TransferPrescription: React.FC = () => {
  const { toast } = useToast();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // EmailJS Configuration - You'll need to set these up
  const [emailConfig, setEmailConfig] = useState({
    serviceId: localStorage.getItem('emailjs_service_id') || '',
    templateId: localStorage.getItem('emailjs_template_id') || '',
    publicKey: localStorage.getItem('emailjs_public_key') || ''
  });
  
  const [showEmailSetup, setShowEmailSetup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleEmailConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveEmailConfig = () => {
    localStorage.setItem('emailjs_service_id', emailConfig.serviceId);
    localStorage.setItem('emailjs_template_id', emailConfig.templateId);
    localStorage.setItem('emailjs_public_key', emailConfig.publicKey);
    setShowEmailSetup(false);
    toast({
      title: "Email Configuration Saved",
      description: "Your EmailJS settings have been saved to local storage.",
    });
  };

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
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.currentPharmacy) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Check if EmailJS is configured
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast({
        title: "Email Not Configured",
        description: "Please configure your EmailJS settings first.",
        variant: "destructive"
      });
      setShowEmailSetup(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'mercerislandpharmacy@gmail.com', // Your pharmacy email
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email || 'No email provided',
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth || 'Not provided',
        current_pharmacy: formData.currentPharmacy,
        current_pharmacy_phone: formData.currentPharmacyPhone || 'Not provided',
        medications: formData.medications || 'Transfer all active prescriptions',
        notes: formData.notes || 'No additional notes',
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString()
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      toast({
        title: "Transfer Request Sent!",
        description: "Your prescription transfer request has been emailed to the pharmacy. We'll contact you within 24 hours.",
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
      console.error('EmailJS Error:', error);
      toast({
        title: "Email Failed",
        description: "Failed to send email. Please try again or call us directly.",
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

          {/* Email Setup Modal */}
          {showEmailSetup && (
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Mail className="text-blue-600" size={24} />
                  EmailJS Configuration Required
                </CardTitle>
                <CardDescription className="text-blue-600">
                  To send emails directly from your website, please configure your EmailJS settings below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="serviceId">EmailJS Service ID</Label>
                  <Input
                    id="serviceId"
                    name="serviceId"
                    value={emailConfig.serviceId}
                    onChange={handleEmailConfigChange}
                    placeholder="Enter your EmailJS Service ID"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="templateId">EmailJS Template ID</Label>
                  <Input
                    id="templateId"
                    name="templateId"
                    value={emailConfig.templateId}
                    onChange={handleEmailConfigChange}
                    placeholder="Enter your EmailJS Template ID"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="publicKey">EmailJS Public Key</Label>
                  <Input
                    id="publicKey"
                    name="publicKey"
                    value={emailConfig.publicKey}
                    onChange={handleEmailConfigChange}
                    placeholder="Enter your EmailJS Public Key"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-4">
                  <Button onClick={saveEmailConfig} className="bg-blue-600 hover:bg-blue-700">
                    Save Configuration
                  </Button>
                  <Button variant="outline" onClick={() => setShowEmailSetup(false)}>
                    Cancel
                  </Button>
                </div>
                <div className="text-sm text-blue-600 bg-blue-100 p-3 rounded-md">
                  <p><strong>Don't have EmailJS?</strong></p>
                  <p>1. Sign up at <a href="https://emailjs.com" target="_blank" className="underline">emailjs.com</a></p>
                  <p>2. Create a service and template</p>
                  <p>3. Get your Service ID, Template ID, and Public Key</p>
                </div>
              </CardContent>
            </Card>
          )}

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Transfer Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary" size={28} />
                      <div>
                        <CardTitle className="text-2xl">Transfer Request Form</CardTitle>
                        <CardDescription>
                          Fill out the information below and we'll email your transfer request to the pharmacy.
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowEmailSetup(true)}
                      className="flex items-center gap-2"
                    >
                      <Settings size={16} />
                      Email Setup
                    </Button>
                  </div>
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
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
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
                        <Label htmlFor="currentPharmacyPhone">Current Pharmacy Phone Number</Label>
                        <Input
                          id="currentPharmacyPhone"
                          name="currentPharmacyPhone"
                          type="tel"
                          value={formData.currentPharmacyPhone}
                          onChange={handleInputChange}
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
                        <Label htmlFor="medications">Medications to Transfer</Label>
                        <Textarea
                          id="medications"
                          name="medications"
                          value={formData.medications}
                          onChange={handleInputChange}
                          placeholder="List the medications you'd like to transfer (optional - we can transfer all active prescriptions)"
                          rows={4}
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
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Email...
                        </div>
                      ) : (
                        "Submit Transfer Request"
                      )}
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
                    <p className="text-sm">We'll call you when your prescriptions are ready</p>
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
                    <a href="tel:+12066226094" className="inline-flex items-center gap-2">
                      <Phone size={16} />
                      Call (206) 622-6094
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TransferPrescription;