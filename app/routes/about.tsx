import { MetaFunction, useLoaderData } from "@remix-run/react";
import WeAreSection from "~/components/about-page/we-are-section";
import MainSection from "~/components/about-page/main-section";
import EventsSection from "~/components/about-page/events-section";
import NumbersSection from "~/components/about-page/numbers-section";
import { AboutCdeDocument } from "types.generated";
import { AboutPdeDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "C4C About Page", content: "Who we are." },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  const [cde, pde] = await Promise.all([
    client.getSingle<AboutCdeDocument>("about-cde"),
    client.getSingle<AboutPdeDocument>("about-pde"),
  ]);
  return { cde, pde };
};

export default function About() {
  const { cde, pde } = useLoaderData<{
    cde: AboutCdeDocument;
    pde: AboutPdeDocument;
  }>();
  const aboutItems = [
    {
      image: "app/images/problem-solvers.png",
      title: "Problem-Solvers",
      description:
        "We're a community of forward-thinkers and solution architects. Embrace challenges, spark innovation, and connect with a network of dynamic individuals.",
    },
    {
      image: "app/images/leaders.png",
      title: "Leaders",
      description:
        "We are a community dedicated to nurturing leadership potential. Explore mentorship, engage in skill-building, and connect with aspiring leaders.",
    },
    {
      image: "app/images/community.png",
      title: "A Tight-Knit Community",
      description:
        "We embrace the strength of togetherness. We are a tight-knit community that fosters genuine relationships and shared experiences.",
    },
  ];

  return (
    <div>
      <div className="px-40 pt-20 gap-18">
        <MainSection />
        <WeAreSection aboutItems={aboutItems} />
        <EventsSection cde={cde} pde={pde} />
        <NumbersSection />
      </div>
      <Footer />
    </div>
  );
}
