//import { Link } from "@remix-run/react";
import { NewWindow } from "../icons";

export interface ClientProps {
  image?: string;
  title?: string;
  description?: string;
  caseStudyLink?: string;
  websiteLink?: string;
}

const PartnerCard = ({
  image,
  title,
  description,
  //caseStudyLink,
  websiteLink,
}: ClientProps) => {
  return (
    <div className="flex flex-col items-start mb-6 md:mb-14">
      <div className="w-full flex-grow min-h-[100px] shadow-small border-[2px] border-[#4A4A51] p-8 mb-4 md:mb-5">
        <div className="flex justify-center mb-4">
          <img
            src={image ?? "app/icons/community.png"}
            alt={title ?? "Title"}
            className="h-40 w-40 md:h-[100px] md:w-[100px] object-cover"
          />
        </div>
        <h3 className="text-lg md:text-xl font-medium text-center mb-4 md:mb-9">
          {title ?? "Title"}
        </h3>
        <p className="text-sm md:text-base text-gray mb-3 md:mb-6 text-center md:text-left">
          {description ?? "lorem ipsum"}
        </p>
      </div>
      <div className="flex flex-col w-full space-y-1.5 md:space-y-3">
        {/* <div className="mt-2 w-full text-left ">
          <Link
            to={caseStudyLink ? caseStudyLink : ""}
            className={` object-cover shadow-small px-8 py-3 w-full mt-6 text-[#333333] text-center border border-[#4a4951] px-6 py-2 object-cover shadow-small font-bold text-sm  ${
              caseStudyLink
                ? "bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition"
                : "bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2] pointer-events-none"
            } flex justify-center items-center`}
          >
            View Case Study
          </Link>
          {/* make this the standard button
        </div> */}

        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center gap-1 md:gap-2 text-sm md:text-base block w-full bg-white-200 font-bold border-[1px] md:border-[1.5px] border-black shadow-mobile md:shadow-small py-2.5 text-center bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition
              ${websiteLink ? "hover:bg-[#EDBAFF] transition" : "text-[#CAC9D0] pointer-events-none"}
              // TODO: background of hover should be different since background is white
              `}
        >
          Partner Website
          {websiteLink && (
            <NewWindow className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
          )}
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;
