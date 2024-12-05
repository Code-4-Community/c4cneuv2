import { type MetaFunction } from "@remix-run/node";
import PositionCard from "~/components/apply-page/position";
import JoinTeamSection from "~/components/apply-page/join-team";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Apply" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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

export default function Apply() {
  return (
    <div>
      <Navbar />
      <div className="pl-8 pb-8">
        <JoinTeamSection />
        <div className="pb-18">
          <h3 className="text-xl text-left mb-2 pb-8">Positions</h3>
          <div className="flex flex-row">
            {exPositionList.map((position, index) => (
              <PositionCard {...position} key={index} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
