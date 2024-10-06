interface MissionStatementProps {
  weLove?: string[];
  subtitle?: string;
  images?: string[];
}

const MissionStatement = ({
  weLove,
  subtitle,
  images,
}: MissionStatementProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-bold mb-2">
        Code4Community designs software solutions for
      </p>
      <p className="text-2xl font-bold mb-2">{weLove?.at(0)}</p>
      <br />
      <p className="text-sm mb-4">{subtitle}</p>

      <div className="grid grid-cols-4 gap-4 content-start">
        {images?.map((image, i) => (
          <img src={image} alt="" width={"264px"} height={"264px"} />
        ))}
      </div>
    </div>
  );
};

export default MissionStatement;
