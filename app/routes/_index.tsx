import { type MetaFunction } from "@remix-run/node";
import WeAreBlock from "~/components/home-page/we-are-block";
import MissionStatement from "~/components/home-page/landing";
import JoinTeamSection from "~/components/home-page/join-team";
import { getPrismicClient } from "~/utils/prismicio";
import {
  HomeDocument,
  HomeDocumentDataReviewsItem,
  HomeDocumentDataTopPicturesItem,
  HomeDocumentDataPeopleAndCausesItem,
  HomeDocumentDataWeAreSectionItem,
  PositionDocumentDataPositionItem,
} from "types.generated";
import { useLoaderData } from "@remix-run/react";
import { asImageSrc, asLink, asText, ImageField } from "@prismicio/client";
import { RichTextField } from "@prismicio/types";
import HearFrom from "~/components/home-page/hear-from";

// needed since some of prismic types lacking a bit
interface HomeData {
  data: {
    top_pictures: HomeDocumentDataTopPicturesItem[];
    we_are_section: HomeDocumentDataWeAreSectionItem[];
    people_and_causes: HomeDocumentDataPeopleAndCausesItem[];
    reviews: HomeDocumentDataReviewsItem[];
    join_team_bottom_pic: ImageField<never>;
    join_team_people_pic: ImageField<never>;
    join_team_description: RichTextField;
    join_team_button_text: RichTextField;
    positions: {
      data: {
        position: PositionDocumentDataPositionItem[];
      };
    };
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Code4Community" },
    { name: "C4C Home Page", content: "Welcome to Code4Community!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<HomeDocument>("home", {
    graphQuery: `{
        home {
          ...homeFields
          positions {
            ...positionsFields
          }
        }
      }`,
  });
};
const c4cPurple = "#605ACD";
// const images = [
//   "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//shelterlink%20(1).jpg",
//   "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//Screenshot%202025-01-30%20at%204.04.07%20PM.png",
//   "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//nefac%20(2)%20(1).jpg",
//   "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//gi%20boston.jpg",
// ];

export default function Index() {
  const document = useLoaderData<HomeData>();
  const home = document.data;

  const peopleAndCauses: string[] = home.people_and_causes
    .map((item) => asText(item.causes))
    .filter((text) => text.trim() !== "");

  /**
   * const peopleAndCauses = home.people_and_causes
  .map((block) => asText([block]))
  .filter((text) => text.trim() !== "");
   */

  const positions = home.positions.data.position.map((item) => ({
    title: asText(item.name),
    description: asText(item.short_description),
    linkLearnMore: "/apply", //TODO: remove not needed, doesnt do anything
    linkApply: "/apply",
  }));

  const images = home.top_pictures
    .map((item) => asImageSrc(item.pic))
    .filter((src): src is string => src !== null);

  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:max-w-[1100px]">
        <MissionStatement
          peopleAndCauses={peopleAndCauses}
          subtitle="Learn more about Code4Community's mission below."
          images={images}
        />

        <div className="flex flex-col md:flex-row">
          <div>
            <p
              className="text-3xl md:text-5xl font-medium mb-10 md:mb-2"
              style={{ color: c4cPurple }}
            >
              We are
            </p>
            {home.we_are_section.map((item, index) => (
              <WeAreBlock
                key={index}
                title={asText(item.title)}
                description={asText(item.description)}
                image={asImageSrc(item.pic) ?? undefined}
                link={asLink(item.link) ?? undefined}
                buttonText={asText(item.button_text)}
                left={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        <HearFrom reviews={home.reviews} />

        <JoinTeamSection
          image={asImageSrc(home.join_team_people_pic) ?? ""}
          // TODO: dont hardcode
          title={"Join Our Team!"}
          description={asText(home.join_team_description)}
          applyLink={"/apply"}
          positions={positions}
        />
        {/* TODO: maybe dont hard code /apply */}

        <div className="mt-20 mb-16">
          <img
            src={asImageSrc(home.join_team_bottom_pic) ?? ""}
            alt="C4C"
            className="hidden md:block h-72 w-full object-cover shadow-small border-[2px] border-[#4A4A51]"
          />
        </div>
      </div>
    </div>
  );
}
