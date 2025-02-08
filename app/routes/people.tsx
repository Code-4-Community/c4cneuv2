import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PeopleDocumentDataPeopleItem, TeamDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import Member from "~/components/member";
import { asText } from "@prismicio/client";
import { useState } from "react";
import { RichTextField } from "@prismicio/types";
import { Button } from "~/components/ui/button";

const eboardTeam = "eboard";

// lead -> tech lead/ pm, order in prismic determines who is shown first
// dev -> a dev
// design -> a designer
enum RoleType {
  LEAD = "lead",
  DEV = "dev",
  DESIGNER = "designer",
}

const stringToRoleType = (role: string): RoleType | undefined => {
  return Object.values(RoleType).find((r) => r === role);
};

const displayRoleType = (role: string): string => {
  switch (stringToRoleType(role)) {
    case RoleType.LEAD:
      return "Leads";
    case RoleType.DEV:
      return "Software developers";
    case RoleType.DESIGNER:
      return "Product Designers";
    default:
      return "";
  }
};

const seasonToMonth = (month: number): string => {
  if (month <= 6) {
    return "Spring";
  } else {
    return "Fall";
  }
};

interface TeamInfo {
  description: string;
  members: Map<string, PeopleDocumentDataPeopleItem[]>;
}

// needed since some of prismic types lacking a bit
interface TeamData {
  data: {
    team_name: string;
    description: RichTextField;
    people: {
      data: {
        people: PeopleDocumentDataPeopleItem[];
      };
    };
  };
}

const transformTeams = (document: TeamData[]): Map<string, TeamInfo> => {
  const roleOrder = [RoleType.LEAD, RoleType.DESIGNER, RoleType.DEV];
  return document
    .filter((obj) => obj.data.team_name !== eboardTeam)
    .reduce<Map<string, TeamInfo>>((acc, obj) => {
      const teamName = obj.data.team_name;
      const people = obj.data.people.data.people;
      const description = asText(obj.data.description);

      // Initialize team info if it doesn't exist
      if (!acc.has(teamName)) {
        const orderedMap = new Map<string, PeopleDocumentDataPeopleItem[]>();
        roleOrder.forEach((role) => orderedMap.set(role, []));
        acc.set(teamName, {
          description,
          members: orderedMap,
        });
      }

      const teamInfo = acc.get(teamName)!;

      // Group people by role_type
      people.forEach((person) => {
        const roleType = person.role_type as RoleType;

        if (Object.values(RoleType).includes(roleType)) {
          const existingPeople = teamInfo.members.get(roleType) || [];
          teamInfo.members.set(roleType, [...existingPeople, person]);
        }
      });

      return acc;
    }, new Map<string, TeamInfo>());
};

export const meta: MetaFunction = () => {
  return [
    { title: "People" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  // get the all team tags, and all of the fields for the people content relationship
  return await client.getAllByType<TeamDocument>("team", {
    graphQuery: `{
          team {
            ...teamFields
            people {
            ...peopleFields
            }
          }
        }`,
  });
};

export default function People() {
  const document = useLoaderData<TeamData[]>();

  const eboard =
    document.filter((obj) => obj.data.team_name === eboardTeam)?.[0].data.people
      ?.data.people || [];

  const teams: Map<string, TeamInfo> = transformTeams(document);

  console.log(teams);

  const teamNames = Array.from(teams.keys());

  const [selectedTeam, setSelectedTeam] = useState<string>(
    teamNames.length > 0 ? teamNames[0] : "",
  );

  const handleButtonClick = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = seasonToMonth(currDate.getMonth());

  return (
    <div className="mx-14 md:mx-[192px]  pt-28 md:pt-20">
      <h1 className="mt-12 mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Meet the {month} {year} <span className="text-indigo-600">Team</span>
      </h1>
      <h2 className="text-base md:text-4xl font-medium mb-9 md:mb-[72px]">
        Meet the <span className="text-indigo-600">E-Board</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 mb-14 md:mb-[72px]">
        {eboard.map((person, i) => (
          <div
            key={i}
            className="w-64 flex-shrink-0 justify-items-start col-span-1"
          >
            <Member
              image={person.headshot.url || undefined}
              name={asText(person.name)}
              role={asText(person.role)}
              email={asText(person.email)}
              linkedin={person.linkedin.embed_url}
              github={person.github.embed_url}
              site={person.website.embed_url}
            />
          </div>
        ))}
      </div>
      <h2 className="text-2xl/8 font-medium md:text-4xl md:mb-3">
        Meet the <span className="text-indigo-600">Project Teams</span>
      </h2>
      <h3 className="text-base font-medium md:text-2xl mb-9 md:mb-[72px]">
        Click on a team name to meet the people behind each project
      </h3>
      <div>
        <div className="mb-6 md:mb-8 flex gap-2.5">
          {teamNames.map((name, i) => (
            <div key={i}>
              <Button
                variant={"outline"}
                onClick={() => handleButtonClick(name)}
              >
                {name}
                <br />
              </Button>
            </div>
          ))}
        </div>
        <p className="mb-9 md:mb-[72px]">
          {selectedTeam && teams.get(selectedTeam)?.description}
        </p>
        <div>
          {selectedTeam && (
            <div>
              <ul>
                {teams.get(selectedTeam)?.members &&
                  Array.from(teams.get(selectedTeam)!.members.entries()).map(
                    ([roleType, people]) =>
                      people.length > 0 && (
                        <div key={roleType} className="mb-8">
                          <h2 className="text-xl font-semibold capitalize mb-4">
                            {displayRoleType(roleType)}
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {people.map((person, i) => {
                              const showRole = roleType === RoleType.LEAD;
                              return (
                                <Member
                                  key={i}
                                  image={person.headshot.url || undefined}
                                  name={asText(person.name)}
                                  role={
                                    showRole ? asText(person.role) : undefined
                                  }
                                  email={asText(person.email)}
                                  linkedin={person.linkedin?.embed_url}
                                  github={person.github?.embed_url}
                                  site={person.website?.embed_url}
                                />
                              );
                            })}
                          </div>
                        </div>
                      ),
                  )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
