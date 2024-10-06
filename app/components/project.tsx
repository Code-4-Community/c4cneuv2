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
    <div className="flex flex-col items-center">
      <img
        src={image ?? "https://i.imgur.com/BlBH8Ak.jpeg"}
        alt={title}
        className="w-48 h-48 object-cover rounded-lg shadow-lg mb-4"
      />
      <p className="text-lg font-semibold">{title ?? "Project Title"}</p>
      <p className="text-sm text-gray-500 mb-4">
        {subtitle ?? "Project Subtitle"}
      </p>
      <p className="text-sm text-gray-500 ml-4 mb-4">
        {description ?? "Project Description"}
      </p>
      <div className="flex space-x-4">
        {link && (
          <a href={link}>
            <button>View Case Study</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
