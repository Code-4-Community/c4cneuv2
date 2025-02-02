import { type MetaFunction } from "@remix-run/node";
import ClientCard from "~/components/clients-page/client-card";
import ClientHeader from "~/components/clients-page/client-header";
import { ClientquoteDocument, CurrclientDocument } from "types.generated";
import { PastclientDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import { ClientProps } from "~/components/clients-page/client-card";
import { useLoaderData } from "@remix-run/react";
import { asText, asLink } from "@prismicio/client";
import { QuoteProps } from "~/components/clients-page/client-header";

export const meta: MetaFunction = () => {
  return [
    { title: "Clients" },
    { name: "description", content: "Welcome to Remix!" },
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
    <div className="px-8 md:px-40 pt-28 md:pt-20">
      <ClientHeader {...clientQuote} />
      <h3 className="text-2xl md:text-4xl mb-4 md:mb-8 font-medium">
        Current Clients
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-7 md:gap-y-10">
        {currClients.map((client, index) => (
          <ClientCard {...client} key={index} />
        ))}
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl mt-16 md:mt-0 mb-4 md:mb-8 font-medium">
          Past Clients
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7 md:gap-y-10 mb-14 md:mb-6">
          {pastClients.map((client, index) => (
            <ClientCard {...client} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
