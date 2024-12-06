export interface CaseProps {
  logo?: string;
  title?: string;
  description?: string;
  problem_statement?: string;
  solution?: string;
  website_image?: string;
  link?: string;
}

const Case = ({ case: caseData }: { case: CaseProps }) => {
  const {
    logo,
    title,
    description,
    problem_statement,
    solution,
    website_image,
    link,
  } = caseData;
  return (
    <div className="flex flex-col items-center">
      <div className="h-[1740.88px] flex-col justify-center items-center gap-[72px] inline-flex">
        <div className="w-[1128px] justify-start items-center gap-6 inline-flex">
          <div className="text-[#333333] text-5xl font-medium  leading-[57.60px]">
            {title ?? "Title"}
          </div>
        </div>
        <div className="h-40 flex-col justify-start items-start gap-[98px] flex">
          <div className="self-stretch justify-start items-start gap-[120px] inline-flex">
            <div className="w-[744px] relative">
              <div className="left-0 top-0 absolute text-[#333333] text-4xl font-medium  leading-[43.20px]">
                Introduction
              </div>
              <div className="w-[743px] left-[1px] top-[65px] absolute text-[#333333] text-base font-normal  leading-tight">
                {description ?? "Description"}
              </div>
            </div>
            <div className="w-[264px] h-40 pt-[21px] pb-[20.71px] bg-[#fcfcfc] shadow border-2 border-[#4a4951] justify-center items-center flex">
              <img
                className="w-[264px] h-[118.29px]"
                src={logo ?? "Logo"}
                alt={`${title} Logo`}
              />
            </div>
          </div>
        </div>
        <div className="h-[311px] px-24 py-[72px] bg-[#fcfcfc] shadow border-2 border-[#4a4951] flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-start gap-12 flex">
            <div className="text-center text-[#6059cd] text-4xl font-medium  leading-[43.20px]">
              Problem Statement
            </div>
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-[936px] text-[#333333] text-base font-normal  leading-tight">
                {problem_statement ?? "Problem Statement"}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[311px] px-24 py-[72px] bg-[#fcfcfc] shadow border-2 border-[#4a4951] flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-start gap-12 flex">
            <div className="text-center text-[#6059cd] text-4xl font-medium  leading-[43.20px]">
              Our Solution
            </div>
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-[936px] text-[#333333] text-base font-normal  leading-tight">
                {solution ?? "Solution"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-8 flex">
          <div className="w-[936px] h-[500.88px] relative">
            <img
              className="w-[936px] h-[14.55px] left-0 top-[486.33px] absolute opacity-60 mix-blend-multiply"
              src="app\icons\image.png"
              alt=""
            />
            <img
              className="w-[852.11px] h-[493.70px] left-[43.64px] top-0 absolute"
              src="app\icons\laptop.png"
              alt=""
            />
            <div className="w-[685.09px] h-[424.88px] left-[132.25px] top-[22.11px] absolute">
              <img
                className="w-[685.40px] h-[459.79px] left-[-0.32px] top-[-0.53px] absolute"
                src={website_image}
                alt={`${title} Website`}
              />
            </div>
          </div>
          <div className="self-stretch h-[38px] bg-[#fcfcfc] flex-col justify-start items-start flex">
            <div className="self-stretch px-[18px] py-3 bg-[#fcfcfc] shadow border border-[#4a4951] justify-center items-center gap-2 inline-flex">
              <a
                href={link}
                className="text-center text-[#333333] text-sm font-bold  leading-[14px]"
              >
                Launch Live Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
