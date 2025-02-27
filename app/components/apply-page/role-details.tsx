import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@remix-run/react";
interface RoleDetailsProps {
  image1?: string;
  // image1Alt?: string;
  image2?: string;
  // image2Alt?: string;
  title?: string;
  tagline?: string;
  roleParagraph?: string[];
  canidateParagrah?: string;
  qualityList: string[];
}

const RoleDetailsCard = ({
  image1,
  // image1Alt,
  image2,
  // image2Alt,
  title,
  tagline,
  roleParagraph,
  canidateParagrah,
  qualityList,
}: RoleDetailsProps) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1100px]">
        <div className="mt-10 md:mt-[120px] flex align-center mb-10 md:mb-20">
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
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-xl md:text-3xl text-gray-700 font-semibold">
              {title ?? "Role Title"}
            </h1>
            <h2 className="text-m md:text-xl text-gray-700">
              {tagline ?? "Tagline"}
            </h2>
          </div>
        </div>

        <div className="border-2 border-gray-300 shadow-lg p-5 md:p-14 mb-4">
          <h2 className="text-indigo-600 text-xl md:text-3xl font-semibold text-left mb-4 md:mb-8">
            What You’ll Be Doing
          </h2>
          <div className="flex align-center">
            <div className="text-gray-700 text-left mb-6 md:w-1/2 md:pr-10	">
              {roleParagraph?.map(
                (
                  par,
                  index, // TODO: change in prismic because this is a hack
                ) => (
                  <p className="mb-4" key={index}>
                    {par}
                  </p>
                ),
              )}
            </div>
            <div className="hidden md:w-1/2 md:flex justify-center">
              <img
                src={image1 ?? "/app/icons/software-engineer.svg"}
                alt={"what you'll be doing"} // TODO: don't hardocde
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-300 shadow-lg p-5 md:p-14 mb-4">
          <h2 className="text-indigo-600 text-xl md:text-3xl font-semibold text-left mb-4 md:mb-8">
            What We're Looking For
          </h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="hidden md:w-1/2 md:flex justify-center pr-10">
              <img
                src={image2 ?? "/app/icons/website-gear.svg"}
                alt={"what we're looking for"} // TODO: don't hardcode
              />
            </div>

            <div className="md:w-1/2">
              <p className="text-gray-700 text-left mb-6 md:pr-10">
                {canidateParagrah ?? "candidate paragraph"}
              </p>
              <p className="text-gray-700 text-left mb-6 md:pr-10 font-semibold">
                Our ideal candidate is someone who is..
              </p>
              <ul className="text-gray-700 text-left mb-6 list-disc pl-5">
                {qualityList.map(
                  (
                    item,
                    index, // TODO: update prismic because this is a hack
                  ) => (
                    <li key={index}>{item}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoleDetailsCard;
