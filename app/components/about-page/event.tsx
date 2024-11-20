export interface EventProps {
  image?: string;
  title?: string;
  description?: string;
}

const Event = ({ image, title, description }: EventProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={image ?? "app/icons/leaders.png"}
        alt={title ?? "Event Title"}
        className="w-full border border-black object-cover shadow-default mb-4"
      />
      <p className="text-2xl text-indigo-600 pt-4">{title ?? "Event Title"}</p>
      <p className="text-base text-gray-500 pt-3 pb-6">
        {description ?? "Event Description"}
      </p>
    </div>
  );
};

export default Event;
