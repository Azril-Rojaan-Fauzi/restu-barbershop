import React from "react";

const ContactMap = () => {
  return (
    <div className="col-span-1 flex w-full flex-col items-center justify-center gap-2">
      <div className="h-full w-full overflow-hidden rounded-xl shadow md:h-80 md:w-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.98432980868364!2d107.75321716285818!3d-6.935231273898401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3000cbcb343%3A0xc2d85f7db0ad11c7!2sMang%20Yadi%20KP.%20Gedong!5e0!3m2!1sid!2sid!4v1770008292911!5m2!1sid!2sid"
          loading="lazy"
          className="h-full w-full border-0"
        />
      </div>
      <a
        href="https://wa.me/62881023892674"
        target="_blank"
        className="w-fit rounded-md bg-black px-4 py-2 text-sm font-light hover:opacity-80"
      >
        Book Now!
      </a>
    </div>
  );
};

export default ContactMap;
