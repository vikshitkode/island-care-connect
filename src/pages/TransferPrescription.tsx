import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, User, Phone, Building2, Pill, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  
  lastName: z.string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid US phone number"),
  
  email: z.string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Please enter a valid email address"
    }),
  
  dateOfBirth: z.string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 120);
      
      return birthDate <= today && birthDate >= minDate;
    }, "Please enter a valid date of birth"),
  
  currentPharmacy: z.string()
    .min(1, "Current pharmacy information is required")
    .min(5, "Please provide complete pharmacy information")
    .max(200, "Pharmacy information is too long"),
  
  currentPharmacyPhone: z.string()
    .min(1, "Current pharmacy phone number is required")
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid US phone number"),
  
  medications: z.string()
    .min(1, "Medication information is required")
    .min(3, "Please provide medication details")
    .max(1000, "Medication information is too long"),
  
  notes: z.string()
    .max(500, "Notes must be less than 500 characters")
    .optional()
});

type FormData = z.infer<typeof formSchema>;

const TransferPrescription: React.FC = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      dateOfBirth: "",
      currentPharmacy: "",
      currentPharmacyPhone: "",
      medications: "",
      notes: ""
    }
  });

  // Phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format as (xxx) xxx-xxxx
    if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return phoneNumber;
    }
  };

  const handleSubmit = async (data: FormData) => {
    try {
      // Clean phone numbers (remove formatting for storage)
      const cleanPhone = data.phone.replace(/\D/g, '');
      const cleanPharmacyPhone = data.currentPharmacyPhone.replace(/\D/g, '');

      // Insert the transfer request into Supabase
      const { error } = await supabase
        .from('transfer_requests')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          phone: cleanPhone,
          email: data.email || null,
          date_of_birth: data.dateOfBirth || null,
          current_pharmacy: data.currentPharmacy,
          current_pharmacy_phone: cleanPharmacyPhone || null,
          medications: data.medications || null,
          notes: data.notes || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Transfer Request Submitted!",
        description: "Your request has been received. We'll contact you within 24 hours to complete your prescription transfer.",
      });

      // Reset form
      form.reset();

    } catch (error) {
      console.error('Error submitting transfer request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or call us directly.",
        variant: "destructive"
      });
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
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <User className="text-primary" size={20} />
                            Personal Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your first name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your last name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="(555) 123-4567"
                                      value={field.value}
                                      onChange={(e) => {
                                        const formatted = formatPhoneNumber(e.target.value);
                                        if (formatted.replace(/\D/g, '').length <= 10) {
                                          field.onChange(formatted);
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="your.email@example.com" 
                                      type="email"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Input 
                                    type="date" 
                                    max={new Date().toISOString().split('T')[0]}
                                    min={new Date(new Date().getFullYear() - 120, 0, 1).toISOString().split('T')[0]}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Current Pharmacy Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Building2 className="text-primary" size={20} />
                            Current Pharmacy Information
                          </h3>
                          <FormField
                            control={form.control}
                            name="currentPharmacy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Pharmacy Name & Address <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="e.g., CVS Pharmacy, 123 Main St, Seattle, WA"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="currentPharmacyPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Pharmacy Phone Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="(555) 123-4567"
                                    value={field.value}
                                    onChange={(e) => {
                                      const formatted = formatPhoneNumber(e.target.value);
                                      if (formatted.replace(/\D/g, '').length <= 10) {
                                        field.onChange(formatted);
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Medication Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Pill className="text-primary" size={20} />
                            Medication Information
                          </h3>
                          <FormField
                            control={form.control}
                            name="medications"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Medications to Transfer <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="List the medications you'd like to transfer (or write 'All active prescriptions')"
                                    rows={4}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Notes</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Any special instructions or questions?"
                                    rows={3}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          disabled={form.formState.isSubmitting}
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-3 text-lg"
                        >
                          {form.formState.isSubmitting ? "Submitting..." : "Submit Transfer Request"}
                        </Button>
                      </form>
                    </Form>
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