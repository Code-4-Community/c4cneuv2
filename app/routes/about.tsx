import { MetaFunction } from "@remix-run/react";
import WeAreSection from "~/components/aboutPage/we-are-section";
import MainSection from "~/components/aboutPage/main-section";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "C4C About Page", content: "Who we are." },
  ];
};

export default function About() {
  const aboutItems = [
    {
      image: "app/icons/problem-solvers.png",
      title: "Problem-Solvers",
      description: "We're a community of forward-thinkers and solution architects. Embrace challenges, spark innovation, and connect with a network of dynamic individuals.",
    },
    {
      image: "app/icons/leaders.png",
      title: "Leaders",
      description: "We are a community dedicated to nurturing leadership potential. Explore mentorship, engage in skill-building, and connect with aspiring leaders."
    },
    {
      image: "app/icons/community.png",
      title: "A Tight-Knit Community",
      description: "We embrace the strength of togetherness. We are a tight-knit community that fosters genuine relationships and shared experiences."
    },
  ];
  return (
    <div className="px-40 pt-20 gap-18">
      <MainSection />
      <WeAreSection aboutItems={aboutItems} />
    </div>
  );
}