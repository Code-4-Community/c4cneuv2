interface WeAreBlockProps {
    title?: string,
    description?: string; 
    image?: string;
    buttonText?: string; 
    left?: boolean; 
  }
  
  const WeAreBlock = ({
    title,
    description,
    image,
    buttonText,
    left
  }: WeAreBlockProps) => {
    if (left) {
        return (
            <div className="flex justify-between items-center mt-10">
              <div className="flex-1 mr-40 w-half">
                <h1 className="text-2xl font-bold mb-2">
                  {title}
                </h1>
                <p className="text-base mb-4">
                  {description}
                </p>
                <button className="bg-purple-100 hover:bg-purple-200 text-black font-bold py-2 px-4 rounded shadow-md w-full">
                  {buttonText}
                </button>
              </div>
              
              <div className="flex-1 text-right">
               {left && <img src={image} alt="Team working together" className="max-w-full h-auto rounded-lg" width={'458px'} height={'286px'}/>}
              </div>
            </div>
            );
    }
    else {
        return (
            <div className="flex justify-between items-center mt-10">
              <div className="flex-1 text-right">
                <img src={image} alt="Team working together" className="max-w-full h-auto rounded-lg mr-40" width={'458px'} height={'286px'}/>
              </div>
              <div className="flex-1 mr-8 w-half">
                <h1 className="text-2xl font-bold mb-2">
                  {title}
                </h1>
                <p className="text-base mb-4">
                  {description}
                </p>
                <button className="bg-purple-100 hover:bg-purple-200 text-black font-bold py-2 px-4 rounded shadow-md w-full">
                  {buttonText}
                </button>
              </div>
            </div>
            );
    }
  };
  
  export default WeAreBlock;
  