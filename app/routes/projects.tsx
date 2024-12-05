import { asImageSrc, asText } from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ProjectDocument } from "types.generated";
import ProjectsCarousel from "~/components/projects/projects-carousel";
import { getPrismicClient } from "~/utils/prismicio";
import Footer from "~/components/footer/footer";

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
      <div className="pt-16 px-16 relative overflow-hidden flex justify-center flex-row">
        <div className="flex-col  w-fit">
          <div className="flex-col justify-start items-start gap-4 inline-flex mb-6 ">
            <h1 className="text-black font-medium text-5xl font-['IBM Plex Sans'] leading-10">
              Projects
            </h1>
            <h3 className="text-center text-[#333333] text-2xl font-medium font-['IBM Plex Sans'] leading-7">
              Take a look at some of the work we've done!
            </h3>
          </div>
          <ProjectsCarousel projects={projectsList} />
        </div>
        <div
          className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full shadow-none
                  bg-[radial-gradient(circle,_rgba(238,210,255,0.5)_30%,_transparent_70%)]
                  translate-x-1/2 translate-y-1/8"
        />
      </div>
      <Footer />
    </div>
  );
}
