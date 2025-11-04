// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import page components
import Home from "@/pages/Home";
import Services from "./pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import Approach from "@/pages/Approach";
import Ecosystem from "@/pages/Ecosystem";
import WhoWeServe from "@/pages/WhoWeServe";
import CaseStudies from "@/pages/CaseStudies";
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Careers from "@/pages/Careers";
import JobDetail from "@/pages/JobDetail";
import Press from "@/pages/Press";
import PressReleaseDetail from "@/pages/PressReleaseDetail";

import { AnimationProvider } from './components/animations/AnimationProvider';
import LenisProvider from "./components/animations/LenisProvider";
import { PageTransition } from "./components/animations/PageTransition";


const App = () => (
  <BrowserRouter>
    <LenisProvider>
      <AnimationProvider>
        <PageTransition>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/approach" element={<Approach />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/who-we-serve" element={<WhoWeServe />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:slug" element={<JobDetail />} />
                <Route path="/press" element={<Press />} /> 
                <Route path="/press/:slug" element={<PressReleaseDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </PageTransition>
      </AnimationProvider>
    </LenisProvider>
  </BrowserRouter>
);

export default App;