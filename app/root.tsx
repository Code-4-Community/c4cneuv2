import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { PrismicProvider } from "../node_modules/@prismicio/react"; // fixes a cannot use import statement outside of a module error
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-gray">
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <PrismicProvider />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
