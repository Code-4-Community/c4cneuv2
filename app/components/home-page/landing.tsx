import { Typewriter } from "react-simple-typewriter";
interface MissionStatementProps {
  subtitle?: string;
  images?: string[];
  peopleAndCauses: string[];
}

const MissionStatement = ({
  subtitle,
  images,
  peopleAndCauses,
}: MissionStatementProps) => {
  const c4cPurple = "#605ACD";
  return (
    <div className="flex flex-col h-[110vh] md:h-[90vh] justify-center">
      <p className="text-3xl md:text-5xl text-[#333333] md:mb-3 font-medium">
        Designing software solutions for
      </p>
      <p
        className="text-3xl md:text-5xl font-medium mb-3"
        style={{ color: c4cPurple }}
      >
        <Typewriter
          words={peopleAndCauses}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
      <p className="text-xl md:text-4xl text-[#333333] md:font-medium mb-8 mt-5 md:mb-14 md:mt-8">
        {subtitle}
      </p>
      <div>
        {images?.[0] && (
          <div className="block md:hidden w-full">
            <img
              src={images[0]}
              alt=""
              className="w-full aspect-[5/3] md:aspect-square object-cover shadow-small border-[2px] border-[#4A4A51]"
            />
          </div>
        )}

        <div className="hidden md:grid grid-cols-4 gap-6">
          {images?.map((image, i) => (
            <div
              key={i}
              className="w-full h-full shadow-small border-[2px] border-[#4A4A51]"
            >
              <img
                src={image}
                alt=""
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
