export interface PositionProps {
  title?: string;
  description?: string;
  linkLearnMore: string;
  linkApply: string;
}

const PositionCard = ({
  title,
  description,
  linkLearnMore: link_learn_more,
  linkApply: link_apply,
}: PositionProps) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <div className="flex justify-left mb-4"></div>
        <h3 className="text-xl font-semibold text-left mb-2">
          {title ?? "Position Description"}
        </h3>
        <p className="text-gray-700 text-left mb-6">
          {description ?? "lorem ipsum"}
        </p>
        <div className="flex space-x-4">
          {link_learn_more && (
            <a href={link_learn_more}>
              <p className="text-lg font-bold underline"> Learn more </p>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-4">
        <div className="block w-full bg-purple-200 text-black-700 font-semibold py-2 text-center border-2 border-gray-300">
          <a href={link_apply}>Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
