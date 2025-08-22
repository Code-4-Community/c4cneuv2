import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ClientQuote, { QuoteProps } from "./client-quote";

export interface ClientQuoteProps {
  quotes: QuoteProps[];
}

const ClientQuoteCarousel = ({ quotes }: ClientQuoteProps) => {
  return (
    <div className="flex flex-col justify-center mt-4">
      <Carousel className="md:block w-full max-w-100vw">
        <CarouselContent className="flex flex-row">
          {quotes.map((quote, index) => (
            <CarouselItem key={index} className="basis-full px-4">
              <ClientQuote
                name={quote.name}
                role={quote.role}
                description={quote.description}
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

export default ClientQuoteCarousel;
