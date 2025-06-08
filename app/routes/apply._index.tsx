import { type MetaFunction } from "@remix-run/node";
import PositionCard from "~/components/apply-page/position-apply-card";
import JoinTeamSection from "~/components/apply-page/join-team";
// import ApplyClient from "~/components/apply-page/apply-client";
import AppTimeline from "~/components/apply-page/app-timeline";
import { Period } from "~/components/apply-page/app-timeline";
import { getPrismicClient } from "~/utils/prismicio";
import {
  ApplyDocument,
  PositionDocumentDataPositionItem,
} from "types.generated";
import { useLoaderData } from "@remix-run/react";
import { asLink, asText, DateField, asDate } from "@prismicio/client";
import { RichTextField } from "@prismicio/types";
import { prismicLinkGen } from "~/utils/util";
import ApplyClient from "~/components/apply-page/apply-client";

// needed since some of linked document type is lacking
interface ApplyData {
  data: {
    member_description: RichTextField;
    application_open: DateField;
    application_close: DateField;
    interview_start: DateField;
    interview_end: DateField;
    application_decision_start: DateField;
    application_decision_end: DateField;
    client_reach_out_description: RichTextField;
    join_team_description: RichTextField;
    positions: {
      data: {
        position: PositionDocumentDataPositionItem[];
      };
    };
  };
}
export const meta: MetaFunction = () => {
  return [
    { title: "Apply" },
    { name: "C4C Apply Page", content: "Join Our Team" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<ApplyDocument>("apply", {
    graphQuery: `{
        apply {
          ...applyFields
          positions {
            ...positionsFields
          }
        }
      }`,
  });
};

export default function Apply() {
  const document = useLoaderData<ApplyData>();

  const applyPage = document.data;
  const positions = document.data.positions.data.position;

  return (
    <div className="flex justify-center">
      <div className="mt-24 md:mt-0 w-[90%] md:max-w-[1100px]">
        <JoinTeamSection
          description={asText(applyPage.join_team_description) ?? ""}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {positions.map((position, index) => (
            <div key={index} className="h-full">
              <PositionCard
                title={asText(position.name)}
                description={asText(position.short_description)}
                linkLearnMore={prismicLinkGen(position.name)}
                linkApply={asLink(position.application) ?? ""}
              />
            </div>
          ))}
        </div>
        <AppTimeline
          periods={
            [
              {
                start: asDate(applyPage.application_open),
                end: asDate(applyPage.application_close),
              },
              {
                start: asDate(applyPage.interview_start),
                end: asDate(applyPage.interview_end),
              },
              {
                start: asDate(applyPage.application_decision_start),
                end: asDate(applyPage.application_decision_end),
              },
            ] as [Period, Period, Period]
          }
        />
        <ApplyClient />
      </div>
    </div>
  );
}
