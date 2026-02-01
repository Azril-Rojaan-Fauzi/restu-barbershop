import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/assets/img/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 60;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`font-secondary fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-neutral/40 shadow-sm backdrop-blur-sm" : "bg-neutral/40"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`cursor-pointer text-xl font-bold transition-colors hover:opacity-80 ${isScrolled ? "text-dark" : "text-dark"}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img src={logo} alt="" className="h-10 w-full" />
          </div>
          {/* Desktop */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className={`transition-colors hover:opacity-80 ${isScrolled ? "text-dark" : "text-dark"}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button
            onClick={toggleMobileMenu}
            className={`hover:text-dark cursor-pointer p-2 transition-colors md:hidden ${isScrolled ? "text-dark" : "text-dark"}`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "mt-3 max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
        >
          <div
            className={`space-y-4 p-4 ${isScrolled ? "bg-transparent" : "bg-transparent"}`}
          >
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-dark block py-2 transition-colors hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
