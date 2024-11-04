import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Event, { EventProps } from "./event";
import { CarouselApi } from "../ui/carousel";

interface EventsCarouselProps {
  events: EventProps[];
}

const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = events.length;

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    setCurrent(api.selectedScrollSnap());
  }, [api]);

  return (
    <div className="flex flex-col justify-center mt-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {events.map((event, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2 md:pl-4">
              <Event
                image={event.image}
                title={event.title}
                description={event.description}
                link={event.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[radial-gradient(circle,rgba(238,210,255,1) 100%, rgba(238,210,255,0) 100%)]" />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center">
        <div className="flex justify-center items-center gap-2 py-2">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className={`rounded-full ${
                index === current
                  ? "bg-indigo-600 w-3.5 h-3.5"
                  : "bg-muted w-2 h-2"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousel;
