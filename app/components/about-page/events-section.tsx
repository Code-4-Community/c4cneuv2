import EventsCarousel from "./events-carousel";
import { EventProps } from "./event";
import { asText } from "@prismicio/client";
import { AboutCdeDocument } from "types.generated";
import { AboutPdeDocument } from "types.generated";

interface EventsSectionProps {
  cde: AboutCdeDocument;
  pde: AboutPdeDocument;
}

export default function EventsSection({ cde, pde }: EventsSectionProps) {
  const cdEvents: EventProps[] = cde.data.events.map((event) => ({
    image: event.image.url ?? "app/icons/leaders.jpeg",
    title: asText(event.title),
    description: asText(event.description),
  }));

  const pdEvents: EventProps[] = pde.data.events.map((event) => ({
    image: event.image.url ?? "app/icons/leaders.jpeg",
    title: asText(event.title),
    description: asText(event.description),
  }));

  return (
    <div>
      <h2 className="text-lg mt-12 mb-4 md:text-3xl md:my-16 font-medium">
        Events
      </h2>
      <h3 className="text-xs mb-12 md:text-xl md:mb-16">
        Throughout the school year, C4C hosts a variety of professional
        development and community development events, both for its club members
        and the greater Northeastern community. See below for some of our past
        mixers, workshops, and more!
      </h3>
      <h2 className="text-lg md:text-3xl text-indigo-600 mb-4 md:mb-10 font-medium">
        Community Development Events
      </h2>
      <EventsCarousel events={cdEvents} />
      <h2 className="text-lg md:text-3xl text-indigo-600 mb-4 md:mb-10 font-medium">
        Professional Development Events
      </h2>
      <EventsCarousel events={pdEvents} />
    </div>
  );
}
