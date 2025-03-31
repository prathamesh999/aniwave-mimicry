
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Contact from "@/components/Contact";
import NewArrivals from "@/components/NewArrivals";

const Index = () => {
  // Initialize scroll animations
  useEffect(() => {
    // Preload images for smoother experience
    const preloadImages = () => {
      const imagesToPreload = [
        "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
      ];
      
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <Layout>
      <Hero />
      <NewArrivals />
      <Featured />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
