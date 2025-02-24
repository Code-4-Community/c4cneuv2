export interface WeAreProps {
  image?: string;
  title?: string;
  description?: string;
}

const WeAreComponent = ({ image, title, description }: WeAreProps) => {
  return (
    <div className="flex flex-row md:flex-col items-start">
      <div className="relative w-36 h-36 hidden md:block md:w-full md:h-auto max-w-full max-h-full">
        <img
          src={image ?? "app/icons/community.png"}
          alt={title ?? "About component image"}
          className="object-contain w-full h-full border border-black"
        />
      </div>
      <div className="md:ml-4 md:ml-0 w-full">
        <p
          className="text-lg md:text-2xl font-medium text-indigo-600 
                      mb-2 md:mt-9 md:mb-3 w-full"
        >
          {title ?? "Title"}
        </p>
        <p className="text-m md:text-base md:py-4 text-gray w-full">
          {description ?? "Lorem ipsum."}
        </p>
      </div>
    </div>
  );
};

export default WeAreComponent;
