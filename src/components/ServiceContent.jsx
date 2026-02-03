import React from "react";

const ServiceContent = () => {
  const services = [
    {
      title: "Cukur Dewasa 25K",
      text: "Tampil percaya diri dengan potongan rambut rapi dan gaya sesuai tren. Cocok untuk semua usia dan acara.",
    },
    {
      title: "Cukur Anak 20K",
      text: "Cukuran cepat, aman, dan nyaman untuk si kecil. Hasil tetap rapi tanpa bikin anak rewel.",
    },
    {
      title: "Botak Licin 30K",
      text: "Cukuran bersih hingga licin sempurna, cocok buat tampilan segar dan praktis tanpa repot.",
    },
    {
      title: "Cukur Jenggot & Kumis 10K",
      text: "Rapikan jenggot dan kumis kamu dengan hasil halus dan presisi, biar makin keren dan terawat.",
    },
  ];
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 pt-6">
      <div className="flex flex-col items-center justify-center gap-3 text-center md:gap-10">
        <h1 className="text-5xl font-bold text-white">Service</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 p-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-span-2 row-span-1 flex flex-col gap-1 p-2 text-start md:col-span-1"
            >
              <h3 className="text-base font-bold tracking-tighter md:text-2xl lg:tracking-normal">
                {service.title}
              </h3>
              <p className="text-[10px] font-light md:text-sm">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
