import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import About from "@/components/sections/About";
import Bento from "@/components/sections/Bento";
import BlogSection from "@/components/sections/Blog";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";
import KeyBenfist from "@/components/sections/KeyBenfist";
import Pricing from "@/components/sections/Pricing";
import ProductOverview from "@/components/sections/ProductOverview";
import Testimonials from "@/components/sections/Testimonials";
import Work from "@/components/sections/Work";

const HomePage = () => {
  return (
    <div className="bg-[#F7F6F7]">
      <Navigation />
      <Hero />
      <Bento />
      <ProductOverview />
      <KeyBenfist />
      <About />
      <Testimonials />
      <Work />
      <Pricing />
      <Faqs/>
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
