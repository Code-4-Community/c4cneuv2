import EventsCarousel from "./events-carousel";
import { EventProps } from "./event";

interface EventsSectionProps {
  description: string;
  cde: EventProps[];
  pde: EventProps[];
}

export default function EventsSection({
  description,
  cde,
  pde,
}: EventsSectionProps) {
  return (
    <div>
      <h2 className="text-xl mt-24 mb-4 md:text-3xl md:my-16 font-medium">
        Events
      </h2>
      <h3 className="text-m mb-12 md:text-xl md:mb-16">{description}</h3>
      <h2 className="text-xl md:text-3xl text-indigo-600 mb-4 md:mb-10 font-medium">
        Community Development Events
      </h2>
      <EventsCarousel events={cde} />
      <h2 className="text-xl md:text-3xl text-indigo-600 mb-4 md:mb-10 font-medium">
        Professional Development Events
      </h2>
      <EventsCarousel events={pde} />
    </div>
  );
}
