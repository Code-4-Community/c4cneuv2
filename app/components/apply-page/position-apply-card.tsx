import { Link } from "@remix-run/react";
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
      <Link to={linkApply} className="w-full">
        <button className="bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] font-semibold py-2 px-4 w-full mt-auto shadow-small border-[2px] border-[#4A4A51]">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default PositionApplyCard;
