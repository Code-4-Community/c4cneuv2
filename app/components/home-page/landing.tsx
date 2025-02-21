interface MissionStatementProps {
  weLove?: string;
  subtitle?: string;
  images?: string[];
}

const MissionStatement = ({
  weLove,
  subtitle,
  images,
}: MissionStatementProps) => {
  const c4cPurple = "#605ACD";
  return (
    <div className="flex flex-col mb-20 h-[90vh] justify-center">
      <p className="text-5xl text-[#333333] mb-3 font-medium">
        Code4Community designs software solutions for
      </p>
      <p className="text-5xl font-medium mb-3" style={{ color: c4cPurple }}>
        {weLove ?? "default text"}
      </p>
      <p className="text-4xl text-[#333333] font-medium mb-4 mt-8">
        {subtitle}
      </p>
      <br />
      <br />

      <div className="grid grid-cols-4 gap-6">
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
  );
};

export default MissionStatement;
