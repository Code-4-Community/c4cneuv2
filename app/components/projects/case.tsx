import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { OpenLink } from "../icons";
import { useNavigate } from "@remix-run/react";

export interface CaseProps {
  logo?: string;
  title?: string;
  introduction?: string;
  problem_statement?: string;
  solution?: string;
  website_image?: string;
  link?: string;
}

const Case = ({ case: caseData }: { case: CaseProps }) => {
  const {
    logo,
    title,
    introduction,
    problem_statement,
    solution,
    website_image,
    link,
  } = caseData;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl text-left my-8 flex">
        <button
          className="relative flex items-center justify-center ms-2 me-14"
          onClick={goBack}
        >
          <div
            className="absolute inset-0 h-20 w-20 rounded-full
               bg-[radial-gradient(circle,_rgba(238,210,255,0.5)_30%,_transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>
          <ArrowLeftIcon className="relative z-10 h-8 w-8 text-gray-800" />
        </button>
        <h1 className="text-3xl md:text-5xl font-medium text-[#333333]">
          {title ?? "Title"}
        </h1>
      </div>
      <div className="flex flex-row w-full max-w-5xl gap-8 my-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-medium text-[#333333] mb-6">
            Introduction
          </h2>
          <p className="text-base leading-relaxed text-[#333333]">
            {introduction ?? "Introduction"}
          </p>
        </div>
        <div className="h-full flex flex-row w-[30%] bg-[#fcfcfc] shadow-small border-[2px] border-[#4A4A51]">
          {logo ? (
            <img
              className="w-full h-auto object-contain"
              src={logo}
              alt={`${title} Logo`}
            />
          ) : (
            <span className="text-gray-500">Logo</span>
          )}
        </div>
      </div>
      <div className="w-full max-w-5xl bg-[#fcfcfc] object-cover shadow-small border-[2px] border-[#4A4A51] p-8 mb-4 md:mb-5">
        <h2 className="text-2xl md:text-4xl font-medium text-[#6059cd] mb-4 md:mb-8">
          Problem Statement
        </h2>
        <p className="text-base leading-relaxed text-[#333333]">
          {problem_statement ?? "Problem Statement"}
        </p>
      </div>

      <div className="w-full max-w-5xl bg-[#fcfcfc] object-cover shadow-small border-[2px] border-[#4A4A51] p-8 mb-4 md:mb-5">
        <h2 className="text-2xl md:text-4xl font-medium text-[#6059cd] mb-4 md:mb-8">
          Our Solution
        </h2>
        <p className="text-base leading-relaxed text-[#333333]">
          {solution ?? "Solution"}
        </p>
      </div>
      <div className="w-full max-w-4xl flex flex-col items-center my-8">
        <div className="relative w-full max-w-2xl border ">
          {website_image && (
            <img
              className="relative z-10 w-full rounded-lg"
              src={website_image}
              alt={`${title} Website`}
            />
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            className="w-full mt-6 bg-[#fcfcfc] text-[#333333] text-center border border-[#4a4951] px-6 py-2 object-cover shadow-small font-bold text-sm hover:bg-[#EDBAFF] transition flex justify-center items-center gap-2"
            rel="noopener noreferrer"
          >
            Launch Live Website <OpenLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default Case;
