export interface AboutProps {
  image?: string;
  title?: string;
  description?: string;
}

const WeAreComponent = ({ image, title, description }: AboutProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={image ?? "app/icons/community.png"}
        alt={title ?? "About component image"}
        className="h-full object-cover shadow-lg mb-4"
      />
      <p className="text-2xl text-indigo-600 pt-9 pb-3"> {title ?? "Title"}</p>
      <p className="py-4 text-base text-gray-500">
        {description ?? "Lorem ipsum."}
      </p>
    </div>
  );
};

export default WeAreComponent;