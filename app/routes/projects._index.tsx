import { asImageSrc, asText } from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { Project2Document } from "types.generated";
import ProjectsCarousel from "~/components/projects/projects-carousel";
import { getPrismicClient } from "~/utils/prismicio";
import { isFilled } from "@prismicio/client";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Projects" },
    { name: "C4C Projects Page", content: "Check out some of our work!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<Project2Document>("project2");
};

export default function Projects() {
  const document = useLoaderData<Project2Document>();
  const projects = document.data.projects;

  const projectsList = projects.map((project) => ({
    logo: asImageSrc(project.logo) ?? undefined,
    title: asText(project.title),
    subtitle: asText(project.subtitle),
    description: asText(project.description),
    has_case: isFilled.contentRelationship(project.case_study),
    link: `${asText(project.title).split(" ").join("-")}`, // make this a shared util
  }));

  return (
    <div className="flex justify-center overflow-hidden relative">
      <div className="mt-24 w-[90%] md:max-w-[1100px]">
        <h1 className="mt-12 md:mt-[120px] md:mb-2 text-2xl md:text-5xl font-medium shrink-0">
          Projects
        </h1>
        <h3 className="text-[#333333] text-lg sm:text-2xl">
          Check out some of the work we've done!
        </h3>
        <ProjectsCarousel projects={projectsList} />
        {/* <div
          className="absolute bottom-0 right-0 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full shadow-none
                  bg-[radial-gradient(circle,_rgba(238,210,255,0.5)_30%,_transparent_70%)]
                  translate-x-1/2 translate-y-1/8"
        /> */}
      </div>
    </div>
  );
}
