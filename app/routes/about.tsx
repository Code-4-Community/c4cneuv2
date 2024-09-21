import { MetaFunction } from "@remix-run/react";
import AboutComponent from "~/components/about-component";
import Project from "~/components/about-component";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "C4C About Page", content: "Who we are." },
  ];
};

export default function About() {
  return (
    <div>
      <AboutComponent
        image={"app/icons/testpic.png"}
        title={"Problem-Solvers"}
        description={"We're a community of forward-thinkers and solution architects. Embrace challenges, spark innovation, and connect with a network of dynamic individuals."}
      />
    </div>
  );
}