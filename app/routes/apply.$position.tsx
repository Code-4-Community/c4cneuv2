import { asImageSrc, asText } from "@prismicio/client";
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
    (pos) => asText(pos.name).toLowerCase() === given_pos,
  );

  return (
    <div className="flex justify-center">
      <div className="md-12 w-[90%] md:max-w-[1100px]">
        <RoleDetailsCard
          image1={asImageSrc(position?.top_pic) ?? undefined}
          //image1Alt={"missing"}
          image2={asImageSrc(position?.bottom_pic) ?? undefined}
          //image2Alt={"idk"}
          title={asText(position?.name) ?? ""}
          tagline={asText(position?.tag_line) ?? ""}
          roleParagraph={
            asText(position?.work, { separator: "\n" })?.split("\n") ?? [] // TODO: do properly in prismic
          }
          canidateParagrah={asText(position?.looking_for) ?? ""}
          qualityList={
            asText(position?.ideal_candidate, { separator: "\n" })?.split(
              "\n",
            ) ?? [] //TODO: do properly in prismic
          }
        />
      </div>
    </div>
  );
}
