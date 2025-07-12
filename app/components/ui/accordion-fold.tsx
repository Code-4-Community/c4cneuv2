import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Link } from "@remix-run/react";

interface AccordionFoldProps {
  item: {
    title: string;
    description: string;
    link?: string;
    link_text?: string;
  };
  key: number;
}

export default function AccordionFold({ item, key }: AccordionFoldProps) {
  return (
    <>
      <Accordion type="multiple" key={key}>
        <AccordionItem
          value="item-1"
          className="shadow-small mb-5 md:mb-8 border border-black px-3 py-1 md:py-6 md:px-8"
        >
          <AccordionTrigger className="font-medium text-m md:text-2xl">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="mb-2 mt-3 md:mb-4 md:mt-5">
              {item.description?.split("\n").map(
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
                to={item.link ?? ""}
                className="underline underline-offset-4 md:underline-offset-8 font-bold"
              >
                {item.link_text}
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
