
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioHome from "./pages/PortfolioHome";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import TigerPage from "./pages/TigerPage";
import ElephantPage from "./pages/ElephantPage";
import LionPage from "./pages/LionPage";
import GaurPage from "./pages/GaurPage";
import RhinoPage from "./pages/RhinoPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/psyc-defence" element={<Index />} />
          <Route path="/psyc-defence/blogs" element={<Blogs />} />
          <Route path="/psyc-defence/tiger" element={<TigerPage />} />
          <Route path="/psyc-defence/elephant" element={<ElephantPage />} />
          <Route path="/psyc-defence/lion" element={<LionPage />} />
          <Route path="/psyc-defence/gaur" element={<GaurPage />} />
          <Route path="/psyc-defence/rhino" element={<RhinoPage />} />
          <Route path="/psyc-defence/sloth-bear" element={<TigerPage />} />
          <Route path="/psyc-defence/leopard" element={<TigerPage />} />
         
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
