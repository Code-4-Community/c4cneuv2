import { asText } from "@prismicio/client";
import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PositionDocument } from "types.generated";
import RoleDetailsCard from "~/components/apply-page/role-details";
import { getPrismicClient } from "~/utils/prismicio";

export const meta: MetaFunction = () => {
  return [
    { title: "Role" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const given_pos = params.position?.split("_").join(" ");
  const client = await getPrismicClient();
  const document = await client.getSingle<PositionDocument>("position");
  return { document, given_pos };
};
// const SoftwareDevRoleDetails = {
//   image1: "/app/icons/software-engineer.svg",
//   image1Alt: "software-engineer",
//   image2: "/app/icons/website-gear.svg",
//   image2Alt: "website gear",
//   title: "Software Developer",
//   tagline: "Develop long-term solutions. Write code to make an impact.",
//   roleParagraph: `Software Developers at C4C are responsible for creating and
//   maintaining software products for our partner organizations.
//   Developers work in Agile collaborative teams and are exposed to
//   every aspect of the product development cycle. Developers can expect
//   to spend roughly 5 hours a week working on tickets with their team,
//   with work ranging from Java API development to React UI development
//   and cloud deployment. As a member of our product teams, you will be
//   working closely with other developers under the guidance of a tech
//   lead and product manager. You will actively participate in team
//   meetings, meet our partners, and constantly learn new technologies.
//   Code4Community is a unique opportunity to deliver real impact
//   through the power of software. In your first few weeks, your code
//   will be running in essential software systems to help children with
//   life threatening illnesses, environmental conservators, and
//   disadvantaged youth.`,
//   canidateParagrah: `A great developer is someone who is highly motivated and willing
//             to learn. Although exposure to software development practices
//             through co-ops, internships, or personal projects is a big plus,
//             we ultimately highly value your passion to improve as a software
//             developer. The ideal candidate is passionate about developing, and
//             learns from their team while empowering the developers around
//             them.`,
//   qualityList: [
//     `Dedicated to the mission, and can be trusted with real work for
//     real people`,
//     ` Motivated to learn new technologies and grow as a software engineer`,
//     `Passionate about helping the Boston community`,
//     `A strong communicator who facilitates collaboration`,
//     `Interested in being a part of the entire product life cycle from
//     software inception to completion`,
//   ],
// };

// TODO: this should be dynamic too
export default function Role() {
  const { document, given_pos } = useLoaderData<{
    document: PositionDocument;
    given_pos: string;
  }>();

  const position = document.data.position.find(
    (pos) => asText(pos.name) === given_pos,
  );

  return (
    <div>
      <RoleDetailsCard
        image1={""}
        image1Alt={"missing"}
        image2={""}
        image2Alt={"idk"}
        title={asText(position?.name) ?? ""}
        tagline={asText(position?.tag_line) ?? ""}
        roleParagraph={asText(position?.work) ?? ""}
        canidateParagrah={asText(position?.looking_for) ?? ""}
        qualityList={[""]}
      />
    </div>
  );
}
