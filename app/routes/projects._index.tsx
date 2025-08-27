import { asImageSrc, asText } from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { Project2Document } from "types.generated";
import ProjectsCarousel from "~/components/projects/projects-carousel";
import { getPrismicClient } from "~/utils/prismicio";
import { isFilled } from "@prismicio/client";
import { prismicLinkGen } from "~/utils/util";

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
    link: `${prismicLinkGen(project.title)}`,
  }));

  return (
    <div className="flex flex-col items-center w-full relative overflow-hidden bg-white">
      <div className="mt-24 mb-6 px-4 w-full max-w-[1100px]">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Projects</h1>
        <h3 className="text-lg md:text-2xl text-gray-700">
          Take a look at some of the work we've done!
        </h3>
      </div>

      <div className="w-full max-w-[1100px] px-4">
        <ProjectsCarousel projects={projectsList} />
      </div>

      <div
        className="absolute bottom-0 right-0 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full shadow-none
                 bg-[radial-gradient(circle,_rgba(238,210,255,0.5)_30%,_transparent_70%)]
                 translate-x-1/2 translate-y-1/8"
      />
    </div>
  );
}
