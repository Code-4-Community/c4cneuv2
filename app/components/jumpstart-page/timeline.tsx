import AccordionFold from "../ui/accordion-fold";
import { asText } from "@prismicio/client";

interface TimelineProps {
  timelineData: {
    title: import("@prismicio/client").RichTextField;
    description1: import("@prismicio/client").RichTextField;
  }[];
}

export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <>
      <h2 className="text-xl mt-16 font-medium md:text-4xl md:mt-20">
        <span className="text-primary">Timeline</span>
      </h2>
      <div className="mt-4 md:mt-6">
        {timelineData.map((item, index) => (
          <AccordionFold
            item={{
              title: asText(item.title),
              description: asText(item.description1, { separator: "\n" }),
            }}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
