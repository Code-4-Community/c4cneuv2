import { type MetaFunction } from "@remix-run/node";
import PositionCard from "~/components/apply-page/position-apply-card";
import JoinTeamSection from "~/components/apply-page/join-team";
import ApplyClient from "~/components/apply-page/apply-client";
import AppTimeline from "~/components/apply-page/app-timeline";
import { Period } from "~/components/apply-page/app-timeline";

export const meta: MetaFunction = () => {
  return [{ title: "Apply" }, { name: "apply", content: "Welcome to Remix!" }];
};

const exPositionList = [
  {
    title: "Software Developer",
    description:
      "Developers write the code that make our projects a reality. " +
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

const DateList = [
  {
    start: new Date("2023-10-29"),
    end: new Date("2023-11-18"),
  },
  {
    start: new Date("2023-11-20"),
    end: new Date("2023-11-29"),
  },
  {
    start: new Date("2023-12-01"),
    end: new Date("2023-12-08"),
  },
];

export default function Apply() {
  return (
    <div>
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
      </div>

      <h3 className="text-xl text-left mb-2 pb-8 pl-8">Application Timeline</h3>
      <div className="pl-40 pr-40">
        <div className="flex justify-center w-full pb-20">
          <AppTimeline periods={DateList as [Period, Period, Period]} />
        </div>
      </div>
      <ApplyClient />
    </div>
  );
}
