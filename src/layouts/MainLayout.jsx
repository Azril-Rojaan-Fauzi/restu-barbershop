import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <div className="h-screen w-full bg-linear-to-b from-slate-950 via-blue-900 to-blue-600"></div>
      <Footer />
    </div>
  );
};

export default MainLayout;
