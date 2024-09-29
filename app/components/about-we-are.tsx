import AboutComponent from "./about-component";

interface WeAreProps {
  aboutItems: AboutProps[];
}

const WeAreSection = ({ aboutItems }: WeAreProps) => {
  return (
    <div>
      <h2 className="text-3xl p-4">We Are</h2>
      <div className="flex flex-col items-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
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
