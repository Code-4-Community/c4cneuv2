import { asImageSrc, asText, asLink } from "@prismicio/client";
import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ProjectDocument } from "types.generated";
import Case from "~/components/projects/case";
import { getPrismicClient } from "~/utils/prismicio";

export const meta: MetaFunction = () => {
  return [
    { title: "Case Study" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const caseId = params.caseId?.split("_").join(" ");
  const client = await getPrismicClient();
  const document = await client.getSingle<ProjectDocument>("project");
  return { document, caseId };
};

export default function Projects() {
  const { document, caseId } = useLoaderData<{
    document: ProjectDocument;
    caseId: string;
  }>();
  const project = document.data.project.find(
    (project) => asText(project.title) === caseId,
  );
  const caseDetails = {
    logo: asImageSrc(project?.logo_image) ?? undefined,
    title: asText(project?.title) ?? undefined,
    introduction: asText(project?.description) ?? undefined,
    problem_statement: asText(project?.case_problem) ?? undefined,
    solution: asText(project?.case_problem) ?? undefined,
    website_image: asImageSrc(project?.website_image) ?? undefined,
    link: asLink(project?.live_website) ?? undefined,
  };
  return <div className="p-16">{<Case case={caseDetails} />}</div>;
}
