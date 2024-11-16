export interface ProjectProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
}

const Project = ({
  image,
  title,
  subtitle,
  description,
  link,
}: ProjectProps) => {
  return (
    <div className="px-0.5 py-12 shadow border-2 border-[#4a4951] flex flex-col justify-start items-center gap-12 h-full">
      <img
        src={image ?? "https://i.imgur.com/BlBH8Ak.jpeg"}
        alt={title}
        className="w-96 h-44 object-cover rounded-lg mb-4"
      />
      <div className="flex-col justify-between items-center gap-6 flex mx-6">
        <div>
          <div className=" text-center text-black text-2xl font-medium font-['IBM Plex Sans'] leading-7 mb-2">
            {title || "Title"}
          </div>
          <div className="text-center text-[#929292] text-base font-normal font-['IBM Plex Sans'] leading-tight">
            {subtitle || "Project Subtitle"}
          </div>
        </div>
        <div className=" text-sm m-auto text-gray-500 line-clamp-[9]">
          {description || "Project Description"}
        </div>
        <div className="text-center text-[#333333] text-sm font-bold font-['IBM Plex Sans'] leading-none ">
          {link && (
            <div className="mt-auto w-full self-stretch h-9 flex-col justify-start items-start flex">
              <div className="self-stretch px-6 py-3 bg-[#f8ecff] shadow border border-[#4a4951] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-[#333333] text-sm font-bold font-['IBM Plex Sans'] leading-none">
                  <a href={link}>
                    <button>View Case Study</button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
