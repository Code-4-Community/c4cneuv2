import { asText, asLink, asImageSrc } from "@prismicio/client";

interface JumpstartIntroProps {
  description: import("@prismicio/client").RichTextField;
  signUpLink: import("@prismicio/client").LinkField;
  image: import("@prismicio/client").ImageField;
}

const JumpstartIntro = ({
  description,
  signUpLink,
  image,
}: JumpstartIntroProps) => {
  return (
    <div className="flex flex-row items-center overflow-x-hidden">
      <div className="flex flex-col h-[110vh] md:h-[90vh] justify-center md:mr-16 relative">
        <p className="text-3xl md:text-5xl text-[#333333] md:mb-3 font-medium">
          Jumpstart
        </p>
        <p className="text-md md:text-2xl text-[#333333] mb-16 mt-6 md:mb-24 md:mt-10">
          {asText(description)}
        </p>
        <a
          href={asLink(signUpLink) ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center gap-1 md:gap-2 text-sm md:text-base block w-1/3 bg-white-200 font-bold border-[1px] md:border-[1.5px] border-black shadow-mobile md:shadow-small py-2.5 text-center bg-[#f8ecff] border-[#4a4951] hover:bg-[#EDBAFF] transition
                    ${signUpLink ? "hover:bg-[#EDBAFF] transition" : "text-[#CAC9D0] pointer-events-none"}
                    `}
        >
          Sign up
        </a>
      </div>
      <div className="hidden md:flex justify-center md:w-1/2">
        <img
          src={asImageSrc(image) ?? "/app/icons/typing.svg"}
          alt={"web development"}
        />
      </div>
    </div>
  );
};

export default JumpstartIntro;
