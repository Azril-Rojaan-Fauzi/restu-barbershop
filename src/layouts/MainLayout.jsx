import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Hero from "../pages/Hero";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default MainLayout;
