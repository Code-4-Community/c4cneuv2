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
    <div className="px-2 py-6 flex flex-col justify-between items-center h-full bg-[#FDFDFD]">
      <div className="px-8 py-8 border-2 border-[#4a4951] flex flex-col justify-between items-center gap-2 h-full object-cover shadow-default">
        <img
          src={logo ?? "https://i.imgur.com/BlBH8Ak.jpeg"}
          alt={title}
          className="w-96 h-44 object-cover rounded-lg mb-4"
        />
        <div className="flex flex-col justify-start items-center gap-6 mx-6 flex-grow w-full">
          <div>
            <div className="text-center text-black text-2xl font-medium font-['IBM Plex Sans'] leading-7 mb-2">
              {title || "Title"}
            </div>
            <div className="text-center text-[#929292] text-base font-normal font-['IBM Plex Sans'] leading-tight">
              {subtitle || "Project Subtitle"}
            </div>
          </div>
          <div className="text-sm text-gray-500 line-clamp-[9] text-start w-full">
            {description || "Project Description"}
          </div>
        </div>
        <div className="mt-2 w-full text-left ">
          {link && (
            <div
              className={`px-8 py-3 object-cover shadow-button ${
                has_case
                  ? "bg-[#f8ecff] border-[#4a4951]"
                  : "bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2]"
              } shadow border flex justify-center items-center`}
            >
              <a
                href={has_case ? link : ""}
                className="text-sm font-bold leading-none"
              >
                <button disabled={!has_case}>View Case Study</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
