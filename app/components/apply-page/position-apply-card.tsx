import PositionBaseCard, { PositionProps } from "../shared/position-card";

export interface PositionApplyCardProps extends PositionProps {
  linkApply: string;
}

const PositionApplyCard = ({
  title,
  description,
  linkLearnMore,
  linkApply,
}: PositionApplyCardProps) => {
  return (
    <div className="max-w-lg mx-auto">
      <PositionBaseCard
        title={title}
        description={description}
        linkLearnMore={linkLearnMore}
      />
      <div className="flex flex-col w-full space-y-4">
        <div className="block w-full bg-purple-200 text-black-700 font-semibold py-2 text-center border-2 border-gray-300">
          <a href={linkApply}>Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default PositionApplyCard;
