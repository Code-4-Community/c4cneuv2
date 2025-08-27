import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPrismicClient } from "~/utils/prismicio";
import { FaqDocument } from "types.generated";
import { asLink, asText } from "@prismicio/client";
import AccordionFold from "~/components/ui/accordion-fold";

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
      <div className="mt-24 md:mt-0 w-[90%] md:max-w-[1100px]">
        <h1 className="mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h1>
        {faqs.data.question_answer.map((item, key) => (
          <AccordionFold
            key={key}
            item={{
              title: asText(item.question),
              description: asText(item.answer, { separator: "\n" }),
              link: asLink(item.link) ?? undefined,
              link_text: asText(item.link_text),
            }}
          />
        ))}
      </div>
    </div>
  );
}
