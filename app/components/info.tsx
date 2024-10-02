interface InfoProps {
    title?: string,
    description?: string; 
    image?: string;
    button?: string; 
    left?: boolean; 
  }
  
  const Info = ({
    title,
    description,
    image,
    button,
    left
  }: InfoProps) => {
    if (left) {
        return (
            <div className="flex justify-between items-center p-6">
              <div className="flex-1 mr-8">
                <h1 className="text-2xl font-bold mb-2">
                  Northeastern University's only student-led collective for charitable software development.
                </h1>
                <p className="text-base mb-4">
                  CAC is led by Northeastern students who are passionate about developing meaningful and exciting products. 
                  Students have the opportunity to learn the fundamentals of product and software development, 
                  while also contributing to the Boston community.
                </p>
                <button className="bg-purple-100 hover:bg-purple-200 text-black font-bold py-2 px-4 rounded shadow-md">
                  Meet Our Team
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
            <div className="flex justify-between items-center p-6">
              <div className="flex-1 text-right">
                <img src={image} alt="Team working together" className="max-w-full h-auto rounded-lg" width={'458px'} height={'286px'}/>
              </div>
              <div className="flex-1 mr-8">
                <h1 className="text-2xl font-bold mb-2">
                  Northeastern University's only student-led collective for charitable software development.
                </h1>
                <p className="text-base mb-4">
                  CAC is led by Northeastern students who are passionate about developing meaningful and exciting products. 
                  Students have the opportunity to learn the fundamentals of product and software development, 
                  while also contributing to the Boston community.
                </p>
                <button className="bg-purple-100 hover:bg-purple-200 text-black font-bold py-2 px-4 rounded shadow-md">
                  Meet Our Team
                </button>
              </div>
            </div>
            );
    }
  };
  
  export default Info;
  