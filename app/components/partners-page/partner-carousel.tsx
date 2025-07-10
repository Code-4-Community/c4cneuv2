import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PartnerCard, { ClientProps } from "./partner-card";

export interface PartnerCarouselProps {
  partners: ClientProps[];
}

const PartnerCarousel = ({ partners }: PartnerCarouselProps) => {
  return (
    <div className="flex flex-col justify-center mt-4">
      <Carousel className="md:block w-full max-w-100vw">
        <CarouselContent className="flex flex-row">
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/2 pl-2 md:pl-4"
            >
              <PartnerCard
                image={partner.image}
                title={partner.title}
                description={partner.description}
                websiteLink={partner.websiteLink}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4">
          <CarouselPrevious />
        </div>
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default PartnerCarousel;
