import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { LanguageProvider } from "./context/LanguageContext";

const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
