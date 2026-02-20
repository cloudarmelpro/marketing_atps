import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import React from "react";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7F6F7] min-h-screen px-[16px] flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
