import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PeopleDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import Member from "~/components/member";
import { asText } from "@prismicio/client";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "People" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<PeopleDocument>("people");
};

export default function People() {
  const document = useLoaderData<PeopleDocument>();

  const people = document.data.people;

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-4">
        {people.map((person, i) => (
          <Member
            key={i}
            image={person.headshot.url ?? undefined}
            name={asText(person.name)}
            role={asText(person.role)}
            email={asText(person.email)}
            linkedin={person.linkedin.embed_url}
            github={person.github.embed_url}
            site={person.website.embed_url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
