import { asImageSrc, asLink, asText } from "@prismicio/client";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ProjectDocument } from "types.generated";
import ProjectsPage from "~/components/projects/projects-page";
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
    image: asImageSrc(project.image) ?? undefined,
    title: asText(project.title),
    subtitle: asText(project.subtitle),
    description: asText(project.description),
    link: asLink(project.link) ?? undefined,
  }));

  return (
    <div>
      <ProjectsPage projects={projectsList} />
    </div>
  );
}
