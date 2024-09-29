interface AboutProps {
  image?: string;
  title?: string;
  description?: string;
}

const AboutComponent = ({ image, title, description }: AboutProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image ?? "app/icons/community.png"}
        alt={title ?? "About component image"}
        className="h-48 object-cover rounded-lg shadow-lg mb-4"
      />
      <p className="text-lg font-semibold">{title ?? "Title"}</p>
      <p className="text-sm text-gray-500 mb-4">
        {description ?? "Lorem ipsum."}
      </p>
    </div>
  );
};

export default AboutComponent;
