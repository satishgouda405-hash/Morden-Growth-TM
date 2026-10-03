import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer, WhatsAppFloat } from "./components/Chrome";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import HowItWorks from "./pages/HowItWorks";
import Work from "./pages/Work";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import { Privacy, Terms, NotFound } from "./pages/Legal";

const titles: Record<string, string> = {
  "/": "Modern Growth | Websites, AI & Digital Growth Solutions",
  "/services": "Services | Modern Growth",
  "/industries": "Industries We Serve | Modern Growth",
  "/how-it-works": "How It Works | Modern Growth",
  "/work": "Our Work | Modern Growth",
  "/about": "About | Modern Growth",
  "/faq": "FAQ | Modern Growth",
  "/contact": "Contact | Modern Growth",
  "/privacy": "Privacy Policy | Modern Growth",
  "/terms": "Terms & Conditions | Modern Growth",
};

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "Page Not Found | Modern Growth";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
