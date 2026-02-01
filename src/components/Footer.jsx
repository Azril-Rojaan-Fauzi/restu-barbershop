import { Clock, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <nav
      className={`bg-secondary fixed bottom-0 z-50 hidden w-full rounded-t-4xl transition-all duration-300 md:block`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Contact */}
          <div className="flex items-center gap-2">
            <div className="">
              <Phone size={24} />
            </div>
            <div className="">
              <p className="text-xs font-bold">0838 2987 6116</p>
              <p className="text-xs font-light">Costumer Care</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <div className="">
              <MapPin size={24} />
            </div>
            <div className="">
              <p className="text-xs font-bold">
                Kp.Gedong, Cileunyi Wetan, Kec. Cileunyi
              </p>
              <p className="text-xs font-light">
                Kabupaten Bandung, Jawa Barat 40622
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <div className="">
              <Clock size={24} />
            </div>
            <div className="">
              <p className="text-xs font-bold">Buka Setiap Hari</p>
              <p className="text-xs font-light">09.00 - 18.00</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
