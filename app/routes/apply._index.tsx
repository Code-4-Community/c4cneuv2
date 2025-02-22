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
    start: new Date("2025-02-29"),
    end: new Date("2025-03-16"),
  },
  {
    start: new Date("2025-03-23"),
    end: new Date("2025-04-02"),
  },
  {
    start: new Date("2025-04-03"),
    end: new Date("2025-04-05"),
  },
];

export default function Apply() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1100px]">
        <JoinTeamSection />
        <div className="mb-20">
          <h3 className="text-2xl text-left font-medium text-[#4A4A51] mb-2 pb-8">
            Positions
          </h3>
          <div className="flex flex-row gap-x-6">
            {exPositionList.map((position, index) => (
              <PositionCard {...position} key={index} />
            ))}
          </div>
        </div>

        <AppTimeline periods={DateList as [Period, Period, Period]} />
        <ApplyClient />
      </div>
    </div>
  );
}
