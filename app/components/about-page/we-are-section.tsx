import AboutComponent, { AboutProps } from "./about-component";

interface WeAreProps {
  aboutItems: AboutProps[];
}

const WeAreSection = ({ aboutItems }: WeAreProps) => {
  return (
    <div>
      <h2 className="text-2xl py-12 text-indigo-600">We are</h2>
      <div className="flex flex-col items-center text-indigo-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutItems.map((item, index) => (
            <AboutComponent
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeAreSection;
