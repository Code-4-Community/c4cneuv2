import { MetaFunction } from "@remix-run/react";
import Case from "~/components/projects/case";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Case Study" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const exCase = {
  logo: "https://i.imgur.com/F4IOuav.jpeg",
  title: "Speak for the Trees",
  description:
    "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
  problem_statement:
    "Lorem ipsum dolor sit amet consectetur. Facilisi sapien donec cras faucibus. Vel nec placerat tortor porta praesent eget bibendum pulvinar ut. At tincidunt erat dictum pretium elementum sed integer ipsum. Erat elit nulla mattis auctor mattis tortor in fames eu. In dui a senectus tempor egestas. Turpis augue turpis nunc blandit sed phasellus eget mattis. Amet phasellus quis ac enim mauris non id elit urna. Lectus justo amet sodales dictumst.",
  solution:
    "Lorem ipsum dolor sit amet consectetur. Facilisi sapien donec cras faucibus. Vel nec placerat tortor porta praesent eget bibendum pulvinar ut. At tincidunt erat dictum pretium elementum sed integer ipsum. Erat elit nulla mattis auctor mattis tortor in fames eu. In dui a senectus tempor egestas. Turpis augue turpis nunc blandit sed phasellus eget mattis. Amet phasellus quis ac enim mauris non id elit urna. Lectus justo amet sodales dictumst.",
  website_image: "https://i.imgur.com/F4IOuav.jpeg",
  link: "https://google.com",
};

export default function Projects() {
  return (
    <div>
      <Case case={exCase} />
      <Footer />
    </div>
  );
}
