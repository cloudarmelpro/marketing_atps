import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F7F6F7]">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
