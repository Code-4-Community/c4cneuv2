import EventsCarousel from "./events-carousel";
import { AboutCdeDocument } from "types.generated";
import { AboutPdeDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import { EventProps } from "./event";
import { useLoaderData } from "@remix-run/react";
import { asText } from "@prismicio/client";

export const loader1 = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<AboutCdeDocument>("about-cde");
};

export const loader2 = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<AboutPdeDocument>("about-pde");
};

export default function EventsSection() {
  const cde = useLoaderData<AboutCdeDocument>();
  const pde = useLoaderData<AboutPdeDocument>();

  const cdEvents: EventProps[] = cde.data.events.map((event) => ({
    image: event.image.url ?? "app/icons/leaders.png",
    title: asText(event.title),
    description: asText(event.description),
  }));

  const pdEvents: EventProps[] = pde.data.events.map((event) => ({
    image: event.image.url ?? "app/icons/leaders.png",
    title: asText(event.title),
    description: asText(event.description),
  }));

  return (
    <div>
      <h2 className="text-3xl py-16">Events</h2>
      <h3 className="pb-16 text-2xl">
        Throughout the school year, C4C hosts a variety of professional
        development and community development events, both for its internal
        members and the greater Northeastern community. See below for some of
        our past mixers, workshops, and more!
      </h3>
      <h2 className="text-3xl text-indigo-600 pb-10">
        Community Development Events
      </h2>
      <EventsCarousel events={cdEvents} />
      <h2 className="text-3xl text-indigo-600 pb-10">
        Professional Development Events
      </h2>
      <EventsCarousel events={pdEvents} />
    </div>
  );
}
