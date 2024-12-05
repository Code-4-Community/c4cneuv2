import { Link } from "@remix-run/react";
import PositionBaseCard from "../shared/position-card";

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
      <h1 className="text-3xl font-semibold  pb-8">
        <span className="text-indigo-600">Join Our Team!</span>
      </h1>
      <div className="flex mb-10">
        <div>
          <h3 className="pb-8">
            Are you passionate about making a positive impact through
            technology? Do you have a knack for coding, designing, or managing
            projects?{" "}
            <Link to="/apply">
              <span className="text-indigo-600">Join us!</span>
            </Link>
          </h3>
          <p>
            C4C recruits talented individuals like you to join our team prior to
            the start of each semester. Check out our open positions below!
          </p>
          <div className="flex flex-col w-full space-y-4 shadow-default">
            <div className="block w-full bg-purple-200 text-black-700 font-semibold py-2 text-center border-2 border-gray-300">
              <Link to="/apply">Apply Now</Link>
            </div>
          </div>
        </div>
        <div className="pl-10">
          <img
            src={
              "https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Team working together"
            className="max-w-full h-auto mr-40 shadow-default border-2 border-gray-300"
          />
        </div>
      </div>
      <div className="flex flex-row basis-full items-stretch">
        {exPositionList.map((position, index) => (
          <PositionBaseCard {...position} key={index} />
        ))}
      </div>
    </div>
  );
};
export default JoinTeamSection;
