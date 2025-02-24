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
