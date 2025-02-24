import { Email, Github, Linkedin, Site } from "./icons";

interface MemberProps {
  image?: string;
  name?: string;
  role?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  site?: string;
}

const Member = ({
  image,
  name,
  role,
  email,
  linkedin,
  github,
  site,
}: MemberProps) => {
  const splitRole = role?.split(/\s*\(\s*(.*)\s*\)\s*/);
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[1] object-cover shadow-small mb-4 border border-[#4a4951]"
      />

      <p className="text-lg font-medium text-center w-full">{name}</p>
      <p className="text-base text-center text-gray-500 mb-2">
        {splitRole?.[0]}
        {splitRole?.[1] && <br />} {splitRole?.[1] && `(${splitRole[1]})`}{" "}
      </p>
      <div className="flex space-x-4">
        {linkedin && (
          <a href={linkedin} className="text-blue-600">
            <Linkedin />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-gray-600 self-end">
            <Email />
          </a>
        )}
        {site && (
          <a href={site} className="text-gray-600">
            <Site />
          </a>
        )}
        {github && (
          <a href={github} className="text-gray-800">
            <Github />
          </a>
        )}
      </div>
    </div>
  );
};

export default Member;
