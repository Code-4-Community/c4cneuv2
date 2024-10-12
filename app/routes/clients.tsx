import { type MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Clients" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Clients() {
  return <Footer />;
}
