const NumbersSection = () => {
  return (
    <div className="mb-20 md:mb-28">
      <h2 className="text-lg mb-4 md:text-3xl md:mb-16 font-medium">
        By the Numbers
      </h2>
      <div className="flex justify-center md:columns-3 relative md:static">
        <div className="z-10">
          <h2
            className="text-sm md:text-4xl font-medium
                          md:ml-10 md:mb-9 md:static
                          absolute left-[-5%]"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">50+ </span>
            active members
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:pl-16 md:pb-9 md:static
                        absolute top-20 left-[-3%]"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">100k </span>
            users
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:pb-9 md:static
                        absolute top-52 left-0"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">10 </span>
            nonprofit partners
          </h2>
        </div>
        <div className="flex justify-center md:static z-0 relative w-52 md:w-80">
          <img
            src="app/images/numbers.png"
            alt="Illustration"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="md:text-right">
          <h2
            className="text-sm md:text-4xl font-medium
                        md:mr-14 md:mb-9 md:static
                        absolute top-[-10%] left-[60%]"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">10k </span>
            lines of code
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:mr-28 md:mb-9 md:static
                        absolute top-16 left-[80%]"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">500 </span>
            pull requests
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:mb-9 md:static
                        absolute top-48 left-2/3"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">5 </span>
            websites deployed
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
