import Categories from "./Categories";
import FAQ from "./FAQ";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Highlights></Highlights>
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
