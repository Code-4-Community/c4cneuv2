import {
  asImageSrc,
  asText,
  ImageField,
  RichTextField,
  TitleField,
} from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { CaseStudyDocument, Project2Document } from "types.generated";
import ProjectsCarousel from "~/components/projects/projects-carousel";
import { getPrismicClient } from "~/utils/prismicio";

// needed since some of linked document type is lacking
interface Project2Data {
  data: {
    projects: {
      logo: ImageField<never>;
      title: TitleField;
      subtitle: RichTextField;
      description: RichTextField;
      case_study: {
        data: CaseStudyDocument;
      };
    }[];
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();

  return await client.getSingle<Project2Document>("project2", {
    graphQuery: `{
          project2 {
            projects {
            ...projectsFields
              case_study {
                ...case_studyFields
              }
            }
          }
        }`,
  });
};

export default function Projects() {
  const document = useLoaderData<Project2Data>();
  const projects = document.data.projects;

  const projectsList = projects.map((project) => ({
    logo: asImageSrc(project.logo) ?? undefined,
    title: asText(project.title),
    subtitle: asText(project.subtitle),
    description: asText(project.description),
    has_case: !!project.case_study.data, // !! exists to force into a boolean value
    link: `${asText(project.title).split(" ").join("_")}`, // make this a shared util
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
