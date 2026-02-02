import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(/assets/img/about-bg.jpg)",
      }}
    >
      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-900 from-0% via-blue-950 via-40% to-transparent to-100% md:via-60%" />
      <AboutContent />
    </div>
  );
};

export default About;
