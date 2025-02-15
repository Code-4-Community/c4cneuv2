import { Email, Github, Linkedin, Site } from "../icons";

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
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-lg shadow-lg mb-4"
      />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
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
