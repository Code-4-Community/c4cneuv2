import { MetaFunction } from "@remix-run/react";
import Project from "~/components/project";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Projects() {
  return (
    <div>
      <Project
        image={"https://i.imgur.com/1D8yxOo.gif"}
        title={"Lucy's Love Bus"}
        subtitle={"Practitioner Search Directory"}
        description={"Lucy’s Love Bus improves quality of life for children with cancer or other life-threatening illnesses with integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s pain and anxiety during and after traditional medical... treatments. We are building an open search directory to allow families across New England to find integrative therapists in their area."}
        link={"https://en.wikipedia.org/wiki/Sirocco_(parrot)"}
      />
    </div>
  );
}
