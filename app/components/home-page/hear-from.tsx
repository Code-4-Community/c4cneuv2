import ClientQuoteCarousel from "./client-quote-carousel";
import { HomeDocumentDataReviewsItem } from "types.generated";
import { asText } from "@prismicio/client";
import { useEffect, useState } from "react";
import { QuoteProps } from "./client-quote";

export interface HearFromProps {
  reviews: HomeDocumentDataReviewsItem[];
}

const HearFrom = (props: HearFromProps) => {
  const [quotes, setQuotes] = useState<QuoteProps[]>([]);

  useEffect(() => {
    const sliced = props.reviews.map((item) => ({
      name: asText(item.name),
      role: asText(item.role),
      description: asText(item.description),
    }));
    setQuotes(sliced);
  }, [props.reviews]);

  return (
    <>
      <h1 className="mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Hear from <span className="text-indigo-600">Partners and Members</span>
      </h1>
      <ClientQuoteCarousel quotes={quotes} />
    </>
  );
};

export default HearFrom;
