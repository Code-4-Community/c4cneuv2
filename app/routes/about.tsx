import { MetaFunction, useLoaderData } from "@remix-run/react";
import MainSection from "~/components/about-page/main-section";
import { AboutDocument } from "types.generated";
import { getPrismicClient } from "~/utils/prismicio";
import EventsSection from "~/components/about-page/events-section";
import WeAreComponent from "~/components/about-page/we-are-component";
import { asImageSrc, asText } from "@prismicio/client";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "C4C About Page", content: "Who we are." },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<AboutDocument>("about");
};

export default function About() {
  const document = useLoaderData<AboutDocument>();
  const aboutData = document.data;

  const cde = aboutData.comm_dev_events.map((item) => ({
    image: asImageSrc(item.pic) ?? undefined,
    title: asText(item.title),
    description: asText(item.description),
  }));

  const pde = aboutData.pro_dev_events.map((item) => ({
    image: asImageSrc(item.pic) ?? undefined,
    title: asText(item.title),
    description: asText(item.description),
  }));

  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:max-w-[1100px]">
        <MainSection
          tagline={asText(aboutData.about_pic_text)}
          culture_description={asText(aboutData.culture_description)}
          imageUrl={asImageSrc(aboutData.about_pic) ?? undefined}
        />
        <div>
          <h2 className="text-xl mb-10 md:text-4xl md:mb-12 text-indigo-600 font-medium">
            We are
          </h2>
          <div className="flex flex-col items-center text-indigo-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {aboutData.we_are.map((item, index) => (
                <WeAreComponent
                  key={index}
                  image={asImageSrc(item.pic) ?? undefined}
                  title={asText(item.title)}
                  description={asText(item.description)}
                />
              ))}
            </div>
          </div>
        </div>
        <EventsSection
          description={asText(aboutData.event_description)}
          cde={cde}
          pde={pde}
        />
        {/* <NumbersSection /> maybe figure out how to do this shit */}
      </div>
    </div>
  );
}
