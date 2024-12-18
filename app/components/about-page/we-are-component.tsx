export interface WeAreProps {
  image?: string;
  title?: string;
  description?: string;
}

const WeAreComponent = ({ image, title, description }: WeAreProps) => {
  return (
    <div className="flex flex-row md:flex-col items-start">
      <img
        src={image ?? "app/icons/community.png"}
        alt={title ?? "About component image"}
        className="w-36 mb-0 shadow-mobile 
                  md:w-full md:mb-4 md:shadow 
                  h-auto border border-black object-contain"
      />
      <div className="ml-4 md:ml-0">
        <p
          className="text-[10px] md:text-2xl font-medium text-indigo-600 
                      mb-2 md:mt-9 md:mb-3"
        >
          {" "}
          {title ?? "Title"}
        </p>
        <p className="text-[8px] md:text-base md:py-4 text-gray">
          {description ?? "Lorem ipsum."}
        </p>
      </div>
    </div>
  );
};

export default WeAreComponent;
