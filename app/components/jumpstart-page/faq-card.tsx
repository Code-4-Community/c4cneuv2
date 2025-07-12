import { asText } from "@prismicio/client";

export interface FAQCardProps {
  question: import("@prismicio/client").RichTextField;
  answer: import("@prismicio/client").RichTextField;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  return (
    <div className="mx-auto bg-white flex items-stretch">
      <div className="shadow-small border-2 border-[#4a4951] p-8">
        <div className="flex flex-col mb-4 justify-between md:min-h-[420px]">
          <h3 className="text-xl font-semibold mb-11 text-center">
            {asText(question)}
          </h3>
          <p className="text-gray-700">{asText(answer)}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
