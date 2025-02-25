import { asText } from "@prismicio/client";
import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PositionDocument } from "types.generated";
import RoleDetailsCard from "~/components/apply-page/role-details";
import { getPrismicClient } from "~/utils/prismicio";
import { resolveParams } from "~/utils/util";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Position" },
    { name: "C4C Position Page", content: "Learn more about our roles" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const given_pos = resolveParams(params.position);
  const client = await getPrismicClient();
  const document = await client.getSingle<PositionDocument>("position");
  return { document, given_pos };
};

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
        image1={"/app/icons/software-engineer.svg"}
        image1Alt={"missing"}
        image2={"/app/icons/website-gear.svg"}
        image2Alt={"idk"}
        title={asText(position?.name) ?? ""}
        tagline={asText(position?.tag_line) ?? ""}
        roleParagraph={
          asText(position?.work, { separator: "\n" })?.split("\n") ?? [] // TODO: do properly in prismic
        }
        canidateParagrah={asText(position?.looking_for) ?? ""}
        qualityList={
          asText(position?.ideal_candidate, { separator: "\n" })?.split("\n") ?? //TODO: do properly in prismic
          []
        }
      />
    </div>
  );
}
