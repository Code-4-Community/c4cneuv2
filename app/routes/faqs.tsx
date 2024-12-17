import { type MetaFunction } from "@remix-run/node";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// title, description, optional link
const exFAQ = [
  { title: "first", description: "first description", link: "apply here" },
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
        <Accordion type="single" collapsible key={key}>
          <AccordionItem value="item-1">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.description}
              {item.link && <p> hi</p>}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
