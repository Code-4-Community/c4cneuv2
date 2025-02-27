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
      <button
        onClick={() => {
          window.open(linkApply);
        }}
        className={`bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] font-semibold py-2 px-4 w-full mt-auto shadow-small border-[2px] border-[#4A4A51]
            ${
              linkApply
                ? "bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition"
                : "bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2] pointer-events-none"
            }
            `}
      >
        Apply Now
      </button>
    </div>
  );
};

export default PositionApplyCard;
