import { type MetaFunction } from "@remix-run/node";
import ClientCard from "~/components/client-card";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Clients" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const exClientsList = [
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
];

const exClientsListPast = [
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image: "app/icons/community.png",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
];

export default function Clients() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-left mb-2">Current Clients</h3>
      <div className="flex flex-row">
        {exClientsList.map((client, index) => (
          <ClientCard {...client} key={index} />
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-left mb-2">Past Clients</h3>
        <div className="flex flex-row">
          {exClientsListPast.map((client, index) => (
            <ClientCard {...client} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
