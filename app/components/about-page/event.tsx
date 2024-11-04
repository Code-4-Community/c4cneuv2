export interface EventProps {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}

const Event = ({ image, title, description, link }: EventProps) => {
  return (
    <div className="flex flex-col">
      {link && (
        <a href={link}>
          <img
            src={image ?? "app/icons/leaders.png"}
            alt={title ?? "Event Title"}
            className="h-full object-cover shadow-lg mb-4"
          />
        </a>
      )}
      <p className="text-lg text-indigo-600">{title ?? "Event Title"}</p>
      <p className="text-sm text-gray-500 my-2">
        {description ?? "Event Description"}
      </p>
    </div>
  );
};

export default Event;
