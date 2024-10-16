import { MetaFunction } from "@remix-run/react";
import ProjectsCarousel from "~/components/projects-carousel";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const exProjectsList = [
  {
    image: "https://i.imgur.com/1D8yxOo.gif",
    title: "Lucy's Love Bus",
    subtitle: "Practitioner Search Directory",
    description:
      "Lucy’s Love Bus improves quality of life for children with cancer or other life-threatening illnesses with integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s pain and anxiety during and after traditional medical... treatments. We are building an open search directory to allow families across New England to find integrative therapists in their area.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {
    image: "https://i.imgur.com/F4IOuav.jpeg",
    title: "Speak For The Trees",
    subtitle: "Tree Stewardship System",
    description:
      "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data on) trees, plant trees, and educate those about trees...",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {
    image: "https://i.imgur.com/1D8yxOo.gif",
    title: "This Star Won't Go Out",
    subtitle: "Grant Application System",
    description:
      "Since its founding in 2011, This Star Won’t Go Out has helped hundreds of families, with gifts totaling over $450,000 to help families suffering from financial hardship related to childhood cancer. We're helping to streamline this system so that TSWGO can focus their attention on helping families.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {},
];

export default function Projects() {
  return <ProjectsCarousel projects={exProjectsList} />;
}
