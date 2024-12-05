import { type MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
