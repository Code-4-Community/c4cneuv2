import { type MetaFunction } from "@remix-run/node";
import PartnerCard from "~/components/partners-page/partner-card";
import PartnerHeader from "~/components/partners-page/partner-header";
import { ClientquoteDocument, CurrclientDocument } from "types.generated";
import { PastclientDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import { ClientProps } from "~/components/partners-page/partner-card";
import { useLoaderData } from "@remix-run/react";
import { asText, asLink } from "@prismicio/client";
import { QuoteProps } from "~/components/partners-page/partner-header";

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
    caseStudyLink:
      asLink(client.casestudylink) ?? "https://github.com/Code-4-Community",
    websiteLink:
      asLink(client.websitelink) ?? "https://github.com/Code-4-Community",
  }));

  const pastClients: ClientProps[] = past.data.pastclient.map((client) => ({
    image: client.logo.url ?? "app/icons/leaders.jpeg",
    title: asText(client.title),
    description: asText(client.description),
    caseStudyLink:
      asLink(client.casestudylink) ?? "https://github.com/Code-4-Community",
    websiteLink:
      asLink(client.websitelink) ?? "https://github.com/Code-4-Community",
  }));

  const clientQuote: QuoteProps = {
    client: asText(quote.data.name),
    title: asText(quote.data.title),
    quote: asText(quote.data.quote),
  };

  return (
    <div className="flex justify-center">
      <div className="mt-24 w-[90%] md:max-w-[1100px]">
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
