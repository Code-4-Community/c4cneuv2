import { type MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer/footer";
import ClientCard from "~/components/client-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Clients" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const exClientsList = [
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg",
    title: "Client Title",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg",
    title: "new new client",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg",
    title: "the new client",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
];

const exClientsListPast = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgHYcdmZEvuKAv8B-hRXW9MtY0layhqSpJQ&s",
    title: "wowzer",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgHYcdmZEvuKAv8B-hRXW9MtY0layhqSpJQ&s",
    title: "C4C recruitment",
    description: "lorem ipsum",
    caseStudyLink: "https://www.c4cneu.com",
    websiteLink: "https://www.c4cneu.com",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgHYcdmZEvuKAv8B-hRXW9MtY0layhqSpJQ&s",
    title: "C4C",
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
