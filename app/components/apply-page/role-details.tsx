import { Link } from "@remix-run/react";
interface RoleDetailsProps {
  image1?: string;
  image1Alt?: string;
  image2?: string;
  image2Alt?: string;
  title?: string;
  tagline?: string;
  roleParagraph?: string[];
  canidateParagrah?: string;
  qualityList: string[];
}

const RoleDetailsCard = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  title,
  tagline,
  roleParagraph,
  canidateParagrah,
  qualityList,
}: RoleDetailsProps) => {
  console.log(qualityList);
  console.log(roleParagraph);

  return (
    <div className="flex justify-center">
      <div className=" w-full max-w-[1100px]">
        <div className="md:mt-[120px] flex align-center mb-20">
          <Link to="/apply">
            <img
              src="/app/icons/arrow.svg"
              style={{ height: 100, width: 100 }}
              alt="arrow"
            />
          </Link>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl text-gray-700 font-semibold">
              {title ?? "Role Title"}
            </h1>
            <h2 className="text-xl text-gray-700">{tagline ?? "Tagline"}</h2>
          </div>
        </div>

        <div className="border-2 border-gray-300 shadow-lg p-14 mb-4">
          <h2 className="text-indigo-600 text-3xl font-semibold text-left mb-8">
            What You’ll Be Doing
          </h2>
          <div className="flex align-center">
            <div className="text-gray-700 text-left mb-6 w-1/2 pr-10	">
              {roleParagraph?.map((par, index) => (
                <p className="mb-4" key={index}>
                  {par}
                </p>
              ))}
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src={image1 ?? "/app/icons/software-engineer.svg"}
                alt={image1Alt ?? "software-engineer"}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-300 shadow-lg p-14 mb-4">
          <h2 className="text-indigo-600 text-3xl font-semibold text-left mb-8">
            What We're Looking For
          </h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="w-1/2 flex justify-center pr-10">
              <img
                src={image2 ?? "/app/icons/website-gear.svg"}
                alt={image2Alt ?? "website gear"}
              />
            </div>

            <div className="w-1/2">
              <p className="text-gray-700 text-left mb-6 pr-10">
                {canidateParagrah ?? "candidate paragraph"}
              </p>
              <p className="text-gray-700 text-left mb-6 pr-10 font-semibold">
                Our ideal candidate is someone who is..
              </p>
              <ul className="text-gray-700 text-left mb-6 list-disc pl-5">
                {qualityList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoleDetailsCard;
