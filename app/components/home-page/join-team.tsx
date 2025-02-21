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
    <div className="pt-8">
      <p className="text-5xl font-medium" style={{ color: c4cPurple }}>
        Join Our Team!
      </p>

      <WeAreBlock
        title="Are you passionate about making a positive impact with technology? Do you have a knack for coding, designing, or managing projects?"
        description="C4C recruits talented individuals like you to join our team prior to the start of each semester. Check out our open positions below!"
        image="https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Apply"
        left={true}
      />

      <div className="flex flex-row basis-full items-stretch gap-6">
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
