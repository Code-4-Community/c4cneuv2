import { type MetaFunction } from "@remix-run/node";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Link, useLoaderData } from "@remix-run/react";
import { getPrismicClient } from "~/utils/prismicio";
import { FaqDocument } from "types.generated";
import { asLink, asText } from "@prismicio/client";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<FaqDocument>("faq");
};

export default function FAQs() {
  const faqs = useLoaderData<FaqDocument>();
  console.log("faqs", faqs.data);
  return (
    <div className="mx-14 md:mx-[192px] pt-28 md:pt-20">
      <h1 className="mb-9 md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Frequently Asked <span className="text-indigo-600">Questions</span>
      </h1>
      {faqs.data.question_answer.map((item, key) => (
        <Accordion type="multiple" key={key}>
          <AccordionItem
            value="item-1"
            className="shadow-small mb-5 md:mb-8 border border-black px-2.5 py-2.5 md:py-10 md:px-10"
          >
            <AccordionTrigger className="font-medium text-xs md:text-2xl">
              {asText(item.question)}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 mt-3 md:mb-4 md:mt-5">
                {asText(item.answer)}
              </div>
              {item.link && item.link_text && (
                <Link
                  to={asLink(item.link) ?? ""} // guaranteed not to be empty by above
                  className="underline underline-offset-2 md:underline-offset-4 font-bold"
                >
                  {asText(item.link_text)}
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
