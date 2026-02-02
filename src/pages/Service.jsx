import ServiceContent from "../components/ServiceContent";

const Service = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover"
      style={{
        backgroundImage: "url(/assets/img/service-bg.jpg)",
      }}
    >
      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-900 from-0% via-blue-950 via-40% to-transparent to-100% md:via-60%" />
      <ServiceContent />
    </div>
  );
};

export default Service;
