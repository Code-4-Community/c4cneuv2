import { type MetaFunction } from "@remix-run/node";
import PartnerCard from "~/components/partners-page/partner-card";
import PartnerHeader from "~/components/partners-page/partner-header";
import { ClientquoteDocument, CurrclientDocument } from "types.generated";
import { PastclientDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import { ClientProps } from "~/components/partners-page/partner-card";
import { useLoaderData } from "@remix-run/react";
import { asText, asLink, isFilled } from "@prismicio/client";
import { QuoteProps } from "~/components/partners-page/partner-header";
import { prismicLinkGen } from "~/utils/util";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Partners" },
    { name: "C4C Partners Page", content: "Learn more about our Partners" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  const [curr, past, quote] = await Promise.all([
    client.getSingle<CurrclientDocument>("currclient"),
    client.getSingle<PastclientDocument>("pastclient"),
    client.getSingle<ClientquoteDocument>("clientquote"),
  ]);
  return { curr, past, quote };
};

//TODO: case study link should point to projects case study if its available
export default function Clients() {
  const { curr, past, quote } = useLoaderData<{
    curr: CurrclientDocument;
    past: PastclientDocument;
    quote: ClientquoteDocument;
  }>();

  const currClients: ClientProps[] = curr.data.currclient.map((client) => ({
    image: client.logo.url ?? "app/icons/leaders.jpeg",
    title: asText(client.title),
    description: asText(client.description),
    caseStudyLink: isFilled.contentRelationship(client.case)
      ? "/projects/" + prismicLinkGen(client.title) // TODO: don't hardcode projects
      : undefined,
    websiteLink: asLink(client.websitelink) ?? undefined,
  }));

  const pastClients: ClientProps[] = past.data.pastclient.map((client) => ({
    image: client.logo.url ?? "app/icons/leaders.jpeg",
    title: asText(client.title),
    description: asText(client.description),
    caseStudyLink: isFilled.contentRelationship(client.case_study)
      ? "/projects/" + prismicLinkGen(client.title) // TODO: don't hardcode projects
      : undefined,
    websiteLink: asLink(client.websitelink) ?? undefined,
  }));

  const clientQuote: QuoteProps = {
    client: asText(quote.data.name),
    title: asText(quote.data.title),
    quote: asText(quote.data.quote),
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute top-0 left-0 w-[50%] aspect-square bg-[radial-gradient(circle_at_5%,#d8bcfc,transparent_50%)] opacity-50 z-[-1] "></div>
      <div className="absolute bottom-[45%] right-0 w-[50%] aspect-square bg-[radial-gradient(circle_at_95%,#ffb3ff,transparent_50%)] opacity-50 z-[-1] "></div>
      <div className="w-[90%] md:max-w-[1100px]">
        <PartnerHeader {...clientQuote} />
        <h3 className="text-xl md:text-4xl mb-5 md:mb-8 font-medium">
          Current Partner Organizations
        </h3>
        <div className="grid md:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-7 md:gap-y-10">
          {currClients.map((client, index) => (
            <PartnerCard {...client} key={index} />
          ))}
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl mt-16 md:mt-0  mb-5 md:mb-8 font-medium">
            Past Partner Organizations
          </h3>
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-7 md:gap-y-10 mb-14 md:mb-6">
            {pastClients.map((client, index) => (
              <PartnerCard {...client} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
