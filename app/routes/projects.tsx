import { asImageSrc, asText } from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ProjectDocument } from "types.generated";
import ProjectsCarousel from "~/components/projects/projects-carousel";
import { getPrismicClient } from "~/utils/prismicio";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<ProjectDocument>("project");
};

export default function Projects() {
  const document = useLoaderData<ProjectDocument>();
  const projects = document.data.project;

  const projectsList = projects.map((project) => ({
    logo: asImageSrc(project.logo_image) ?? undefined,
    title: asText(project.title),
    subtitle: asText(project.subtitle),
    description: asText(project.description),
    has_case: project.has_case_study,
    link: `http://localhost:5173/case/${asText(project.title)}`,
  }));

  return (
    <div>
      <div className="pt-16 px-4 md:px-16 relative overflow-hidden flex flex-col items-center text-center">
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="flex flex-col items-start gap-4 mb-6 w-full md:ml-32">
            <h1 className="text-black font-medium text-3xl sm:text-5xl font-['IBM Plex Sans'] leading-snug sm:leading-10">
              Projects
            </h1>
            <h3 className="text-[#333333] text-xl sm:text-2xl font-medium font-['IBM Plex Sans'] leading-relaxed">
              Take a look at some of the work we've done!
            </h3>
          </div>
          <ProjectsCarousel projects={projectsList} />
        </div>
        <div
          className="absolute bottom-0 right-0 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full shadow-none
                  bg-[radial-gradient(circle,_rgba(238,210,255,0.5)_30%,_transparent_70%)]
                  translate-x-1/2 translate-y-1/8"
        />
      </div>
    </div>
  );
}
