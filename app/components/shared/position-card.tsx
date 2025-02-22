export interface PositionProps {
  title?: string;
  description?: string;
  linkLearnMore: string;
}

const PositionBaseCard = ({
  title,
  description,
  linkLearnMore,
}: PositionProps) => {
  return (
    <div className="mx-auto ">
      <div className="shadow-small border-2 border-[#4a4951] p-8 mb-4">
        <div className="flex justify-left mb-4"></div>
        <h3 className="text-xl font-semibold text-left mb-2">
          {title ?? "Position Description"}
        </h3>
        <p className="text-gray-700 text-left mb-6">
          {description ?? "lorem ipsum"}
        </p>
        <div className="flex space-x-4">
          {linkLearnMore && (
            <a href={linkLearnMore}>
              <p className="text-lg font-bold underline"> Learn more </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PositionBaseCard;
