import { type MetaFunction } from "@remix-run/node";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const exFAQ = [
  {
    title: "Do I need prior experience to join C4C?",
    description:
      "No, we welcome applicants of all backgrounds and experience levels!",
    link_text: "Apply",
    link: "/apply",
  },
  { title: "second", description: "second description" },
  { title: "third", description: "third description", link: "clients here" },
];

export default function FAQs() {
  return (
    <div>
      <h1 className="mt-12 mb-9 ml-8 md:ml-[192px] md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Frequently asked <span className="text-indigo-600">Questions</span>
      </h1>
      {exFAQ.map((item, key) => (
        <Accordion type="multiple" key={key}>
          <AccordionItem
            value="item-1"
            className="shadow-small mx-6 md:mx-[192px] mb-5 md: border border-black px-2.5 py-2.5 md:py-10 md:px-10"
          >
            <AccordionTrigger className="font-medium text-xs md:text-2xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 mt-3 md:mb-4 md:mt-5">
                {item.description}
              </div>
              {item.link && item.link_text && (
                <Link
                  to={item.link}
                  className="underline underline-offset-2 md:underline-offset-4 justify-center font-bold"
                >
                  {item.link_text}
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
