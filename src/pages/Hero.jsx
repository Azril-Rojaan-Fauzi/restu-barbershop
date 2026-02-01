import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-linear-to-b from-slate-950 via-blue-900 to-blue-600">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
