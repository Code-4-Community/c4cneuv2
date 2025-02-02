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

type AlignmentOptionType = "center" | "start" | "end";

interface EventsCarouselProps {
  events: EventProps[];
}

const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = events.length;
  const [alignOption, setAlignOption] = useState(
    "start" as AlignmentOptionType,
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const updateAlignOption = () => {
      setAlignOption(window.innerWidth < 768 ? "center" : "start");
    };
    updateAlignOption();
    window.addEventListener("resize", updateAlignOption);
    return () => window.removeEventListener("resize", updateAlignOption);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Carousel
        setApi={setApi}
        opts={{
          align: alignOption,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 mr-2">
          {events.map((event, index) => (
            <CarouselItem
              key={index}
              className="basis-7/12 md:basis-1/3 md:pl-4"
            >
              <Event
                image={event.image}
                title={event.title}
                description={event.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="md:py-2 text-center">
        <div className="flex justify-center items-center gap-2 md:pt-2 pb-14 md:pb-16">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className={`rounded-full ${
                index === current
                  ? "bg-indigo-600 w-3 h-3 md:w-4 md:h-4 " + current + index
                  : "bg-muted w-2 h-2 md:w-2.5 md:h-2.5 " + current + index
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
