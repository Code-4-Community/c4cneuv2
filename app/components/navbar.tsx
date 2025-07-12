import { C4C, Hamburger, X } from "./icons";
import { useLocation } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header className="flex justify-center">
      <div
        className="fixed md:relative w-[90vw] md:w-[95vw] flex justify-between items-center bg-white
                      shadow-small md:shadow-small m-5 md:p-4 md:m-4
                      border-[1px] md:border-2 border-[#4A4A51]
                      h-14 md:h-24 z-40"
      >
        <div className="flex items-center justify-start ml-3 md:ml-4">
          <Link to="/">
            <C4C className="aspect-square w-10 md:w-16 md:h-auto" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Hamburger
              className={`w-4 h-3 mr-4 ${isOpen ? "hidden" : "block"}`}
            />
          </button>
        </div>
        <nav
          className={`fixed md:absolute top-0 right-0 md:top-7 h-full w-2/3
                      md:flex md:items-center md:h-auto md:justify-end md:mr-8
                      bg-[#EFEEFF] md:bg-transparent transition-transform duration-300 transform md:transform-none z-50
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
          <div className="flex flex-col md:flex-row ml-11 md:ml-0 md:gap-6 mt-20 md:mt-0">
            <Link
              to="/"
              className="text-xl md:text-2xl mb-4 md:mb-0 text-black md:hidden" // Hidden on larger screens
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {[
              { name: "Partners", href: "/partners" },
              { name: "People", href: "/people" },
              // { name: "Projects", href: "/projects" },
              { name: "Apply", href: "/apply" },
              { name: "About Us", href: "/about" },
              { name: "FAQs", href: "/faqs" },
              { name: "Jumpstart", href: "/jumpstart" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xl md:text-2xl mb-4 md:mb-0 text-black whitespace-nowrap ${
                  isActive(link.href)
                    ? "font-bold md:font-medium md:text-indigo-600"
                    : "md:font-medium md:text-[#333333]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
