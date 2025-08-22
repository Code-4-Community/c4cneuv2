import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "../ui/carousel";
import Event, { EventProps } from "./event";
import { CarouselApi } from "../ui/carousel";

type AlignmentOptionType = "center" | "start" | "end";

interface EventsCarouselProps {
  events: EventProps[];
}

const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [alignOption, setAlignOption] = useState(
    "start" as AlignmentOptionType,
  );

  useEffect(() => {
    if (!api) {
      return;
    }
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
        <CarouselDots className="md:pt-2 pb-14 md:pb-16" />
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
