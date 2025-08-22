import { asText } from "@prismicio/client";

export interface FAQCardProps {
  question: import("@prismicio/client").RichTextField;
  answer: import("@prismicio/client").RichTextField;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  return (
    <div className="mx-auto bg-white flex items-stretch h-full">
      <div className="shadow-small border-2 border-[#4a4951] p-8 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-6 text-center">
          {asText(question)}
        </h3>
        <p className="text-gray-700 flex-grow">{asText(answer)}</p>
      </div>
    </div>
  );
};

export default FAQCard;
