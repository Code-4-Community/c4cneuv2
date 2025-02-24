import { Link } from "@remix-run/react";

export interface ProjectProps {
  logo?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  has_case?: boolean;
}

const Project = ({
  logo,
  title,
  subtitle,
  description,
  link,
  has_case,
}: ProjectProps) => {
  return (
    <div className="py-6 flex flex-col justify-between items-center h-full bg-transparent">
      <div className="px-8 py-8 border-2 border-[#4a4951] flex flex-col justify-between items-center gap-2 h-full object-cover shadow-default bg-[#FDFDFD] ">
        <img
          src={logo ?? "https://i.imgur.com/BlBH8Ak.jpeg"}
          alt={title}
          className="w-96 h-44 object-cover rounded-sm mb-4"
        />
        <div className="flex flex-col justify-start items-center gap-6 mx-6 flex-grow w-full max-w-lg">
          <div>
            <div className="text-center text-black text-2xl font-medium font-['IBM Plex Sans'] leading-7 mb-2">
              {title || "Title"}
            </div>
            <div className="text-center text-[#929292] text-base font-normal font-['IBM Plex Sans'] leading-tight">
              {subtitle || "Project Subtitle"}
            </div>
          </div>
          <div className="clamped-text text-sm text-gray-500 line-clamp-[9] text-start w-full overflow-hidden">
            {description || "Project Description"}
          </div>
        </div>
        <div className="mt-2 w-full text-left ">
          {link && (
            <Link
              to={has_case ? link : ""}
              className={` object-cover shadow-small px-8 py-3 w-full mt-6 text-[#333333] text-center border border-[#4a4951] px-6 py-2 object-cover shadow-small font-bold text-sm  ${
                has_case
                  ? "bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition"
                  : "bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2]"
              } flex justify-center items-center`}
            >
              View Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
