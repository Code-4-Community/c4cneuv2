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
        className="w-full max-w-md aspect-[3/2] border border-black object-cover shadow-mobile md:shadow md:mb-4"
      />
      <p className="text-[10px] md:text-2xl text-indigo-600 mt-3 md:mt-4">
        {title ?? "Event Title"}
      </p>
      <p className="text-[8px] md:text-base mt-1.5 md:mt-3 mb-6">
        {description ?? "Event Description"}
      </p>
    </div>
  );
};

export default Event;
