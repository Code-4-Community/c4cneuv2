interface MissionStatementProps {
    weLove?: string[]; 
    subtitle?: string;
    images?: string[]; 
  }
  
  const MissionStatement = ({
    weLove,
    subtitle,
    images
  }: MissionStatementProps) => {
    const c4cPurple = '#605ACD';
    const c4cLightPurple = '#F8EDFF';
    const c4cGray = '#4A4A51';
    return (
      <div className="flex flex-col mb-20">
        <p className="text-4xl font-bold mb-2">Code4Community designs software solutions for</p>
        <p className="text-4xl font-bold mb-2" style={{ color: c4cPurple }}>{weLove?.at(0)}</p>
        <p className="text-lg mb-4">{subtitle}</p>
        <br />
        <br />

        <div className="grid grid-cols-4 gap-4 content-start">
            {images?.map((image, i) => (
                <img src={image} alt="" width={'264px'} height={'264px'}/>
            ))}
        </div>
      </div>
    );
  };
  
  export default MissionStatement;
  