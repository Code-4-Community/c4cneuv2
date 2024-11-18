import SvgArrow from "app/components/icons/Arrow";
import SoftwareEngineer from "app/components/icons/SoftwareEngineer";
import WebsiteGear from "app/components/icons/WebsiteGear";
const RoleDetailsSection = () => {
  return (
    <div
      className="pl-8 pr-8"
      style={{ paddingLeft: "120px", paddingRight: "120px" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <a
          href={"https://www.c4cneu.com/apply"}
          style={{ alignSelf: "center", marginRight: "24px" }}
        >
          <SvgArrow />
        </a>
        <div>
          <h1 className="text-3xl text-gray-700 font-semibold">
            {" "}
            Software Developer{" "}
          </h1>
          <h2 className="text-xl text-gray-700 font-semibold  pb-8">
            {" "}
            Develop long-term solutions. Write code to make an impact.{" "}
          </h2>
        </div>
      </div>
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <div className="flex justify-left mb-4"></div>
        <h2 className="text-indigo-600 text-xl font-semibold text-left mb-2">
          {" "}
          What You’ll Be Doing
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="text-gray-700 text-left mb-6">
            Software Developers at C4C are responsible for creating and
            maintaining software products for our partner organizations.
            Developers work in Agile collaborative teams and are exposed to
            every aspect of the product development cycle. Developers can expect
            to spend roughly 5 hours a week working on tickets with their team,
            with work ranging from Java API development to React UI development
            and cloud deployment. As a member of our product teams, you will be
            working closely with other developers under the guidance of a tech
            lead and product manager. You will actively participate in team
            meetings, meet our partners, and constantly learn new technologies.
            Code4Community is a unique opportunity to deliver real impact
            through the power of software. In your first few weeks, your code
            will be running in essential software systems to help children with
            life threatening illnesses, environmental conservators, and
            disadvantaged youth.
          </p>
          <SoftwareEngineer />
        </div>
      </div>
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <h2 className="text-indigo-600 text-xl font-semibold text-left mb-2">
          {" "}
          What We’re Looking For{" "}
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <WebsiteGear />
          <div style={{ paddingLeft: "60px" }}>
            <p className="text-gray-700 text-left mb-6">
              A great developer is someone who is highly motivated and willing
              to learn. Although exposure to software development practices
              through co-ops, internships, or personal projects is a big plus,
              we ultimately highly value your passion to improve as a software
              developer. The ideal candidate is passionate about developing, and
              learns from their team while empowering the developers around
              them.{" "}
            </p>
            <p className="text-gray-700 text-left mb-6">
              {" "}
              Our ideal candidate is someone who is...{" "}
            </p>
            <ul className="text-gray-700 text-left mb-6 list-disc pl-5">
              <li>
                {" "}
                Dedicated to the mission, and can be trusted with real work for
                real people{" "}
              </li>
              <li>
                {" "}
                Motivated to learn new technologies and grow as a software
                engineer{" "}
              </li>
              <li> Passionate about helping the Boston community</li>
              <li> A strong communicator who facilitates collaboration</li>
              <li>
                {" "}
                Interested in being a part of the entire product life cycle from
                software inception to completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoleDetailsSection;
