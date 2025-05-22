import ClientQuote from "./client-quote";
import { HomeDocumentDataReviewsItem } from "types.generated";
import { asText } from "@prismicio/client";
import { useEffect, useState } from "react";

export interface HearFromProps {
  reviews: HomeDocumentDataReviewsItem[];
}

const HearFrom = (props: HearFromProps) => {
  const [reviews, setReviews] = useState<HomeDocumentDataReviewsItem[]>(
    props.reviews,
  );
  useEffect(() => {
    setReviews(props.reviews.slice(0, 3));
  }, [props.reviews]);

  return (
    <>
      <h1 className="mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Hear from <span className="text-indigo-600">Partners and Members</span>
      </h1>

      {reviews.map((item, index) => (
        <ClientQuote
          key={index}
          name={asText(item.name)}
          role={asText(item.role)}
          description={asText(item.description)}
        />
      ))}
    </>
  );
};

export default HearFrom;
