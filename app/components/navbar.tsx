import { C4C, Hamburger, X } from "./icons";
import { useLocation } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  console.log(location);
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header>
      <div
        className="fixed md:relative w-[90%] md:w-[98%] flex justify-between items-center bg-white
                      shadow-small md:shadow m-5 md:p-4 md:m-4
                      border-[1px] md:border-2 border-black
                      h-11 md:h-24 z-40"
      >
        <div className="flex items-center ml-4 md:ml-14">
          <a href="/">
            <C4C className="w-6 md:w-12" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Hamburger
              className={`w-4 h-3 mr-4 ${isOpen ? "hidden" : "block"}`}
            />
          </button>
        </div>
      </div>
      <nav
        className={`fixed md:absolute top-0 right-0 h-full w-2/3
                      md:flex md:items-center md:top-11 md:justify-between md:h-auto
                      bg-indigo-600 md:bg-transparent transition-transform duration-300 transform md:transform-none z-50
                      ${
                        isOpen
                          ? "translate-x-0 shadow-[-7px_8px_rgba(74,74,81,1)]"
                          : "translate-x-full"
                      }`}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        )}
        <div
          className="flex flex-col text-white md:text-black
                      mt-20 md:mt-0 ml-11 md:flex-row md:justify-center md:gap-6"
        >
          <Link
            className={`text-xl mb-4 ${isOpen ? "block" : "hidden"}`}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {[
            { name: "People", href: "/people" },
            { name: "Projects", href: "/projects" },
            { name: "Clients", href: "/clients" },
            { name: "Apply", href: "/apply" },
            { name: "FAQs", href: "/faqs" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xl md:text-2xl mb-4 md:mb-0 text-white ${
                isActive(link.href)
                  ? "font-bold md:font-medium md:text-indigo-600"
                  : "md:font-medium md:text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          className={`text-xl md:text-2xl ml-11 md:mr-20 ${
            isActive("/about")
              ? "font-bold text-white md:font-medium md:text-indigo-600"
              : "md:font-medium text-white md:text-black"
          } ${isOpen ? "block" : "hidden md:block"}`}
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
}
