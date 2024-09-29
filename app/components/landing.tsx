interface LandingProps {
    title?: string,
    weLove?: string[]; 
    subtitle?: string;
    images?: string[]; 
  }
  
  const Landing = ({
    title,
    weLove,
    subtitle,
    images
  }: LandingProps) => {
    return (
      <div className="flex flex-col items-center m-20">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg font-semibold">{weLove?.at(0)}</p>
        <br />
        <p className="text-sm mb-4">{subtitle}</p>

        <div className="grid grid-cols-4 gap-4 content-start">
            {images?.map((image, i) => (
                <img src={image} alt="" width={'264px'} height={'264px'}/>
            ))}
        </div>
      </div>
    );
  };
  
  export default Landing;
  