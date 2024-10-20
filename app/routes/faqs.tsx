import { type MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function FAQs() {
  return <Footer />;
}
