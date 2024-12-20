import { Link } from "@remix-run/react";
import MailingList from "./mailing-list";

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-6 md:px-12">
      <div className="mb-8">
        <MailingList />
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center md:items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center items-start gap-1">
          <nav className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "People", href: "/people" },
              { name: "Projects", href: "/projects" },
              { name: "Clients", href: "/clients" },
              { name: "Apply", href: "/apply" },
              { name: "FAQs", href: "/faqs" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[#4a4951] text-sm font-bold underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-[#4a4951] text-sm font-bold">
            Contact us at{" "}
            <a href="mailto:c4cneu@gmail.com" className="underline">
              c4cneu@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#4a4951] text-base ">
            Made with love by Code4Community
          </p>
          <p className="text-[#9997a2] text-xs">
            Northeastern University, Boston, MA
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Facebook", href: "https://www.facebook.com/c4cneu/" },
            { name: "Instagram", href: "http://instagram.com/c4cneu" },
            { name: "GitHub", href: "https://github.com/Code-4-Community" },
            { name: "Slack", href: "https://c4cneu.slack.com/" },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/company/code-4-community/",
            },
            {
              name: "YouTube",
              href: "https://youtube.com/channel/UC7FI2u_BVjB0EkKMmx-yibA",
            },
          ].map((social) => (
            <Link
              key={social.name}
              to={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#4a4951] text-sm font-bold underline "
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
