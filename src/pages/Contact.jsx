import ContactContent from "../components/ContactContent";
import ContactMap from "../components/ContactMap";

const Contact = () => {
  return (
    <div className="h-screen w-full bg-linear-to-b from-slate-950 via-blue-900 to-blue-600">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 pt-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <ContactContent />
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
