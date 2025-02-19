
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerResearch from "./components/onboarding/CustomerResearch";
import CourseLayout from "./components/layout/CourseLayout";
import CoursesIndex from "./pages/courses/Index";
import CourseContent from "./pages/courses/CourseContent";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<CourseLayout />}>
            <Route index element={<CoursesIndex />} />
            <Route path=":id" element={<CourseContent />} />
            <Route path="market/customer-research" element={<CustomerResearch />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
