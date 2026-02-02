import { Clock, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const items = [
    {
      icon: <Phone />,
      text: "0838 2987 6116",
      subText: "Costumer Care",
    },
    {
      icon: <MapPin />,
      text: "Kp.Gedong, Cileunyi Wetan, Kec. Cileunyi",
      subText: "Kabupaten Bandung, Jawa Barat 40622",
    },
    {
      icon: <Clock />,
      text: "Buka Setiap Hari",
      subText: "09.00 - 18.00",
    },
  ];
  return (
    <nav
      className={`bg-secondary fixed bottom-0 z-50 hidden w-full rounded-t-4xl transition-all duration-300 md:block`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col justify-between md:flex-row">
          {items.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div className="">{item.icon}</div>
              <div className="">
                <p className="text-xs font-bold">{item.text}</p>
                <p className="text-xs font-light">{item.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Footer;
