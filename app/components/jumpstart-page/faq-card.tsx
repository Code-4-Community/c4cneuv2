export interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  return (
    <div className="mx-auto">
      <div className="shadow-small border-2 border-[#4a4951] p-8 h-80">
        <div className="flex flex-col mb-4 text-center">
          <h3 className="text-xl font-semibold mb-11">
            {question ?? "Question"}
          </h3>
          <p className="text-gray-700">{answer ?? "Answer"}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
