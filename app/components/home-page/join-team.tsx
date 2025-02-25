import { PositionApplyCardProps } from "../apply-page/position-apply-card";
import PositionBaseCard from "../shared/position-card";
import WeAreBlock from "./we-are-block";

const c4cPurple = "#605ACD";

export interface JoinTeamSectionProps {
  image?: string;
  title?: string;
  description?: string;
  applyLink: string;
  positions?: PositionApplyCardProps[];
}
const JoinTeamSection = ({
  image,
  title,
  description,
  applyLink,
  positions,
}: JoinTeamSectionProps) => {
  return (
    <div className="md:pt-8">
      <p
        className="text-3xl md:text-5xl font-medium mb-10 md:mb-2"
        style={{ color: c4cPurple }}
      >
        {title}
      </p>

      <WeAreBlock
        description={description}
        image={image}
        buttonText="Apply"
        link={applyLink}
        left={false}
      />

      <div className="flex flex-col -mt-12 md:mt-0 md:flex-row basis-full items-stretch md:gap-6">
        {positions?.map((position, index) => (
          <div key={index} className="w-full md:w-1/3">
            <PositionBaseCard
              key={index}
              title={position.title}
              description={position.description}
              linkLearnMore={
                "/apply/" + (position.title?.split(" ").join("_") ?? "")
              }
              //TODO: dont hardcode apply
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default JoinTeamSection;
