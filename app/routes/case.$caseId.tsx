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
  const caseId = params.caseId;
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
    title: asText(project?.title),
    introduction: asText(project?.description),
    problem_statement: asText(project?.case_problem),
    solution: asText(project?.case_problem),
    website_image: asImageSrc(project?.website_image) ?? undefined,
    link: asLink(project?.live_website) ?? undefined,
  };
  return <div className="p-4">{<Case case={caseDetails} />}</div>;
}
