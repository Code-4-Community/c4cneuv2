import { Link } from "@remix-run/react";

interface WeAreBlockProps {
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  link?: string;
  left?: boolean;
}

const WeAreBlock = ({
  title,
  description,
  image,
  buttonText,
  link,
  left,
}: WeAreBlockProps) => {
  return (
    <div className="flex flex-col mb-24 md:flex-row md:mt-12 md:h-72 md:mb-24 ">
      <div className="flex flex-col mb-8 md:justify-between md:items-start md:w-3/5 md:mb-0">
        <div>
          <h1 className="text-2xl font-medium text-[#333333] mb-3">{title}</h1>
          <p className="text-xl md:text-base text-[#333333] mb-4 md:mb-0">
            {description}
          </p>
        </div>
        <Link
          className={`bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] font-semibold py-2 px-4 w-full mt-auto shadow-small border-[2px] border-[#4A4A51] flex justify-center 
          ${
            link
              ? "bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition"
              : "bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2] pointer-events-none"
          }`}
          to={link ?? ""} //TODO: make this the standard button
        >
          {buttonText}
        </Link>
      </div>

      <div
        className={`flex ${left ? "md:order-first md:mr-32" : "md:ml-32"} aspect-3/2 md:aspect-auto md:justify-center md:items-center md:w-1/2`}
      >
        <img
          src={image}
          alt="Team working together"
          className="w-full aspect-[3/2] md:h-full object-cover shadow-small border-[2px] border-[#4A4A51]"
        />
      </div>
    </div>
  );
};

export default WeAreBlock;
