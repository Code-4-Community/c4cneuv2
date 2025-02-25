import { asImageSrc, asText, asLink } from "@prismicio/client";
import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { CaseStudyDocument } from "types.generated";
import Case from "~/components/projects/case";
import { getPrismicClient } from "~/utils/prismicio";
import { filter } from "@prismicio/client";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Case Study" },
    { name: "C4C Case Study Page", content: "View Case Study" },
  ];
};

// TODO: add a default 404 error page
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const caseId = params.caseId?.split("-").join(" ").toLowerCase() ?? "";
  const client = await getPrismicClient();

  try {
    const document = await client.getFirst<CaseStudyDocument>({
      filters: [filter.at("document.tags", [`${caseId}`])],
    });

    return document;
  } catch {
    throw new Response("Not Found", { status: 404 });
  }
};

export default function Projects() {
  const document = useLoaderData<CaseStudyDocument>();

  const case_study = document.data;

  const caseDetails = {
    logo: asImageSrc(case_study?.logo) ?? undefined,
    title: asText(case_study?.title),
    introduction: asText(case_study?.introduction),
    problem_statement: asText(case_study?.problem_statement),
    solution: asText(case_study?.solution),
    website_image: asImageSrc(case_study?.website_image) ?? undefined,
    link: asLink(case_study?.link) ?? undefined,
  };

  return <div className="p-16">{<Case case={caseDetails} />}</div>;
}
