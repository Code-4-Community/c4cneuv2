interface WeAreBlockProps {
  title?: string;
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
  left,
}: WeAreBlockProps) => {
  return (
    <div className="flex mt-12 w-full h-72 mb-24">
      <div
        className={`flex ${left ? "order-last ml-32" : "mr-32"} justify-center items-center w-1/2`}
      >
        <img
          src={image}
          alt="Team working together"
          className="w-full h-full object-cover shadow-small border-[2px] border-[#4A4A51]"
        />
      </div>

      <div className="flex flex-col justify-between items-start w-3/5">
        <div>
          <h1 className="text-2xl font-medium text-[#333333] mb-3">{title}</h1>
          <p className="text-base text-[#333333]">{description}</p>
        </div>

        <button className="bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] font-semibold py-2 px-4 w-full mt-auto shadow-small border-[2px] border-[#4A4A51]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default WeAreBlock;
