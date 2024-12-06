import C4C from "./icons/C4C";
import { useLocation } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  console.log(location);
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="flex justify-between items-center bg-white shadow-default p-4 m-4 border-2 border-black h-24">
      <div className="flex items-center w-12 ml-14">
        <a href="/">
          <C4C />
        </a>
      </div>
      <div className="m-auto grid grid-cols-5 gap-6 inline-flex justify-center items-center">
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
            className={`font-['IBM Plex Sans'] text-2xl ${
              isActive(link.href) ? "text-indigo-600" : "text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link
        className={`font-['IBM Plex Sans'] text-2xl mr-14 ${
          isActive("/about") ? "text-indigo-600" : "text-black"
        }`}
        to="/about"
      >
        About Us
      </Link>
    </nav>
  );
}
