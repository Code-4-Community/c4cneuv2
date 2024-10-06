import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PeopleDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import Member from "~/components/member";
import { asText } from "@prismicio/client";
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
