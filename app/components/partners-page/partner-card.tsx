import { NewWindow } from "../icons";

export interface ClientProps {
  image?: string;
  title?: string;
  description?: string;
  caseStudyLink: string;
  websiteLink: string;
}

const PartnerCard = ({
  image,
  title,
  description,
  caseStudyLink,
  websiteLink,
}: ClientProps) => {
  return (
    <div className="flex flex-col items-start md:mb-14">
      <div className="w-full flex-grow min-h-[100px] shadow-small border-[2px] border-[#4A4A51] p-8 mb-11">
        <div className="flex justify-center mb-4">
          <img
            src={image ?? "app/icons/community.png"}
            alt={title ?? "Title"}
            className="h-16 w-16 md:h-[100px] md:w-[100px] object-cover"
          />
        </div>
        <h3 className="text-sm md:text-xl font-medium text-center mb-4 md:mb-9">
          {title ?? "Title"}
        </h3>
        <p className="text-[10px] leading-none md:text-base text-gray mb-6">
          {description ?? "lorem ipsum"}
        </p>
      </div>
      <div className="flex flex-col w-full space-y-1.5 md:space-y-3">
        <div className="text-sm md:text-base block w-full bg-[rgb(248,237,255)] font-bold border-[1px] md:border-[1.5px] border-black shadow-mobile md:shadow-small py-2.5 text-center">
          <a href={caseStudyLink}>Project Case Study</a>
        </div>

        <div className="text-sm md:text-base block w-full bg-white-200 font-bold border-[1px] md:border-[1.5px] border-black shadow-mobile md:shadow-small py-2.5 text-center">
          <a
            href={websiteLink}
            className="flex justify-center items-center gap-1 md:gap-2"
          >
            Client Website
            <NewWindow className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
