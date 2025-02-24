import WeAreComponent, { WeAreProps } from "./we-are-component";

interface Props {
  aboutItems: WeAreProps[];
}

const WeAreSection = ({ aboutItems }: Props) => {
  return (
    <div>
      <h2 className="text-xl mb-10 md:text-4xl md:mb-12 text-indigo-600 font-medium">
        We are
      </h2>
      <div className="flex flex-col items-center text-indigo-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aboutItems.map((item, index) => (
            <WeAreComponent
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
          <div>
            <img
              src={"app/images/community.jpeg"}
              alt={"About component"}
              className="object-contain w-full border border-black md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreSection;
