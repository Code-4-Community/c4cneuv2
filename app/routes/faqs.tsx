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
    { title: "C4C FAQs" },
    { name: "C4C FAQ Page", content: "Frequently asked questions" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<FaqDocument>("faq");
};

export default function FAQs() {
  const faqs = useLoaderData<FaqDocument>();

  return (
    <div className="flex justify-center">
      <div className="mt-24 w-[90%] md:max-w-[1100px]">
        <h1 className="mt-12 mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h1>
        {faqs.data.question_answer.map((item, key) => (
          <Accordion type="multiple" key={key}>
            <AccordionItem
              value="item-1"
              className="shadow-small mb-5 md:mb-8 border border-black px-3 py-1 md:py-6 md:px-8"
            >
              <AccordionTrigger className="font-medium text-m md:text-2xl">
                {asText(item.question)}
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-2 mt-3 md:mb-4 md:mt-5">
                  {asText(item.answer, { separator: "\n" })
                    ?.split("\n")
                    .map(
                      (
                        par,
                        index, // TODO: change in prismic because this is a hack
                      ) => (
                        <p className="mb-4" key={index}>
                          {par}
                        </p>
                      ),
                    )}
                </div>
                {item.link && item.link_text && (
                  <Link
                    to={asLink(item.link) ?? ""}
                    className="underline underline-offset-4 md:underline-offset-8 font-bold"
                  >
                    {asText(item.link_text)}
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
