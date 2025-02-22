import PositionBaseCard from "../shared/position-card";
import WeAreBlock from "./we-are-block";

const c4cPurple = "#605ACD";

const exPositionList = [
  {
    title: "Software Developer",
    description:
      "Developers write the code that make our projects a reality." +
      "Help us tackle tough technical problems while creating the code that powers C4C!",
    linkLearnMore: "https://www.c4cneu.com",
    linkApply: "https://www.c4cneu.com",
  },
  {
    title: "Product Manager",
    description:
      "Product Managers scope out our products and prioritize the team's work. " +
      "Help us take the vision of our clients and turn it into a reality!",
    linkLearnMore: "https://www.c4cneu.com",
    linkApply: "https://www.c4cneu.com",
  },
  {
    title: "Product Designer",
    description:
      "Designers create the look and feel of our products. " +
      "Take an idea from conception to delivery while defining our user's experience.",
    linkLearnMore: "https://www.c4cneu.com",
    linkApply: "https://www.c4cneu.com",
  },
];

const JoinTeamSection = () => {
  return (
    <div className="md:pt-8">
      <p
        className="text-3xl md:text-5xl font-medium mb-10 md:mb-2"
        style={{ color: c4cPurple }}
      >
        Join Our Team!
      </p>

      <WeAreBlock
        title="Are you passionate about making a positive impact with technology? Do you have a knack for coding, designing, or managing projects?"
        description="C4C recruits talented individuals like you to join our team prior to the start of each semester. Check out our open positions below!"
        image="https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//IMG_7712.jpg"
        buttonText="Apply"
        left={false}
      />

      <div className="flex flex-col -mt-12 md:mt-0 md:flex-row basis-full items-stretch md:gap-6">
        {exPositionList.map((position, index) => (
          <div key={index} className="w-full md:w-1/3">
            <PositionBaseCard {...position} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default JoinTeamSection;
