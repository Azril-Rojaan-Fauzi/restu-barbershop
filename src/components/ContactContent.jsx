import { Mail, MapPin, Phone } from "lucide-react";

const ContactContent = () => {
  const items = [
    {
      icon: <Phone />,
      text: "0838 2987 6116",
    },
    {
      icon: <Mail />,
      text: "pangkasrestu@gmail.com",
    },
    {
      icon: <MapPin />,
      text: "Kp.Gedong, Cileunyi Wetan, Kec. Cileunyi,Kabupaten Bandung, Jawa Barat 40622",
    },
  ];
  return (
    <div className="col-span-1 flex flex-col justify-center gap-4 px-4">
      <h2 className="text-4xl font-bold">Restu Barbershop</h2>
      {items.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <h4>{item.icon}</h4>
          <p className="w-full text-sm font-semibold">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactContent;
