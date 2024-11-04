export interface AboutProps {
  image?: string;
  title?: string;
  description?: string;
}

const AboutComponent = ({ image, title, description }: AboutProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={image ?? "app/icons/community.png"}
        alt={title ?? "About component image"}
        className="h-full object-cover shadow-lg mb-4"
      />
      <p className="text-lg font-semibold text-indigo-600">
        {title ?? "Title"}
      </p>
      <p className="py-4 text-sm text-gray-500 mb-4">
        {description ?? "Lorem ipsum."}
      </p>
    </div>
  );
};

export default AboutComponent;
