import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TransferPrescription from "./pages/TransferPrescription";
import PrescriptionServices from "./pages/services/PrescriptionServices";
import FreeDelivery from "./pages/services/FreeDelivery";
import MedicationTherapy from "./pages/services/MedicationTherapy";
import Immunizations from "./pages/services/Immunizations";
import HealthScreenings from "./pages/services/HealthScreenings";

import WellnessConsultations from "./pages/services/WellnessConsultations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transfer-prescription" element={<TransferPrescription />} />
          <Route path="/services/prescription-services" element={<PrescriptionServices />} />
          <Route path="/services/free-delivery" element={<FreeDelivery />} />
          <Route path="/services/medication-therapy" element={<MedicationTherapy />} />
          <Route path="/services/immunizations" element={<Immunizations />} />
          <Route path="/services/health-screenings" element={<HealthScreenings />} />
          
          <Route path="/services/wellness-consultations" element={<WellnessConsultations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
