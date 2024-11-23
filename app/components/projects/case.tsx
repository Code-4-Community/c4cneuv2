export interface CaseProps {
  logo?: string | null;
  title?: string | null;
  introduction?: string | null;
  problem_statement?: string | null;
  solution?: string | null;
  website_image?: string | undefined;
  link?: string | undefined;
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

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl text-left my-8">
        <h1 className="text-3xl md:text-5xl font-medium text-[#333333]">
          {title ?? "Title"}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 my-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-medium text-[#333333] mb-6">
            Introduction
          </h2>
          <p className="text-base leading-relaxed text-[#333333]">
            {introduction ?? "Introduction"}
          </p>
        </div>
        <div className="w-48 h-48 lg:w-auto lg:h-auto bg-[#fcfcfc] object-cover shadow-default border-2 border-[#4a4951] flex items-center justify-center">
          {logo ? (
            <img
              className="max-w-full max-h-full"
              src={logo}
              alt={`${title} Logo`}
            />
          ) : (
            <span className="text-gray-500">Logo</span>
          )}
        </div>
      </div>

      <div className="w-full max-w-5xl bg-[#fcfcfc] object-cover shadow-default border-2 border-[#4a4951]  p-6 md:p-8 my-8">
        <h2 className="text-2xl md:text-4xl font-medium text-[#6059cd] mb-4">
          Problem Statement
        </h2>
        <p className="text-base leading-relaxed text-[#333333]">
          {problem_statement ?? "Problem Statement"}
        </p>
      </div>

      <div className="w-full max-w-5xl bg-[#fcfcfc] object-cover shadow-default border-2 border-[#4a4951] p-6 md:p-8 my-8">
        <h2 className="text-2xl md:text-4xl font-medium text-[#6059cd] mb-4">
          Our Solution
        </h2>
        <p className="text-base leading-relaxed text-[#333333]">
          {solution ?? "Solution"}
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center my-8">
        <div className="relative w-full max-w-2xl">
          {website_image && (
            <img
              className="relative z-10 w-full rounded-lg"
              src={website_image}
              alt={`${title} Website`}
            />
          )}
        </div>
        <div></div>
        {link && (
          <a
            href={link}
            target="_blank"
            className="w-full mt-6 bg-[#fcfcfc] text-[#333333] text-center border border-[#4a4951] px-6 py-2 object-cover shadow-button font-bold text-sm hover:bg-[#EDBAFF] transition"
            rel="noreferrer"
          >
            <button>Launch Live Website</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Case;
