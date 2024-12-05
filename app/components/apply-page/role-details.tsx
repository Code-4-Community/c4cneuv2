import { Link } from "@remix-run/react";
interface RoleDetailsProps {
  image1?: string;
  image1Alt?: string;
  image2?: string;
  image2Alt?: string;
  title?: string;
  tagline?: string;
  roleParagraph?: string;
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
  return (
    <div
      className="pl-8 pr-8"
      style={{ paddingLeft: "120px", paddingRight: "120px" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/apply">
          <img
            src="/app/icons/arrow.svg"
            style={{ height: 100, width: 100 }}
            alt="arrow"
          />
        </Link>
        <div>
          <h1 className="text-3xl text-gray-700 font-semibold">
            {title ?? "Role Title"}
          </h1>
          <h2 className="text-xl text-gray-700 font-semibold  pb-8">
            {tagline ?? "Tagline"}
          </h2>
        </div>
      </div>
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <div className="flex justify-left mb-4"></div>
        <h2 className="text-indigo-600 text-xl font-semibold text-left mb-2">
          What You’ll Be Doing
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="text-gray-700 text-left mb-6">
            {roleParagraph ?? "paragraph explaining role"}
          </p>
          <img
            src={image1 ?? "/app/icons/software-engineer.svg"}
            style={{ height: 290.811, width: 360 }}
            alt={image1Alt ?? "software-engineer"}
          />
        </div>
      </div>
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <h2 className="text-indigo-600 text-xl font-semibold text-left mb-2">
          What We’re Looking For
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={image2 ?? "/app/icons/website-gear.svg"}
            style={{ height: 297.342, width: 360 }}
            alt={image2Alt ?? "website gear"}
          />
          <div style={{ paddingLeft: "60px" }}>
            <p className="text-gray-700 text-left mb-6">
              {canidateParagrah ?? "canidate paragraph"}
            </p>
            <p className="text-gray-700 text-left mb-6">
              Our ideal candidate is someone who is...
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
  );
};
export default RoleDetailsCard;
