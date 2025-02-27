import { linkGen } from "~/utils/util";
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
  //description,
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
        title="Are you passionate about making a positive impact with technology? Do you have a knack for coding, designing, or managing projects?"
        description="C4C recruits talented individuals like you to join our team prior to the start of each semester. Check out our open positions below!"
        // description={description}
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
              linkLearnMore={"/apply/" + linkGen(position.title)}
              //TODO: dont hardcode apply
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default JoinTeamSection;
