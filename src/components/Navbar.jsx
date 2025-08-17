import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.webp";


// Update LINKS array to include all requested sections
const LINKS = [
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "About", link: "#about" },
  { name: "Reviews", link: "#reviews" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b-2 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-0 md:pl-2"> {/* Changed pl-2 to pl-0 for more left alignment */}
          <a href="#">
            <img src={logo} width={220} height={30} alt="UrbanWood"/>
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-lg font-bold" // <-- Changed to font-bold
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile menu absolute dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4 left-0 z-10`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-xl font-bold block py-2 tracking-wide" // <-- Changed to font-bold
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;