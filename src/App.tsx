import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import page components
import Home from "@/pages/Home";
import { AnimationProvider } from './components/animations/AnimationProvider';
import LenisProvider from "./components/animations/LenisProvider";
import { PageTransition } from "./components/animations/PageTransition";
import { ScrollIndicator } from "./components/animations/ScrollIndicator";


const App = () => (
  <BrowserRouter>
    <LenisProvider>
      <AnimationProvider>
        <ScrollIndicator />
        <PageTransition>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Other routes */}
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