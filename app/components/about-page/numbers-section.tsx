interface NumbersSectionProps {
  stats: { statistic: string; description: string }[];
}

const NumbersSection = ({ stats }: NumbersSectionProps) => {
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
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[0]["statistic"]}{" "}
            </span>
            {stats[0]["description"]}
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:pl-16 md:pb-9 md:static
                        absolute top-20 left-[-3%] whitespace-nowrap"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[1]["statistic"]}{" "}
            </span>
            {stats[1]["description"]}
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:pb-9 md:static
                        absolute top-52 left-0"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[2]["statistic"]}{" "}
            </span>
            {stats[2]["description"]}
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
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[3]["statistic"]}{" "}
            </span>
            {stats[3]["description"]}
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:mr-28 md:mb-9 md:static
                        absolute sm:top-20 md:top-16 left-[80%] whitespace-nowrap"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[4]["statistic"]}{" "}
            </span>
            {stats[4]["description"]}
          </h2>
          <h2
            className="text-sm md:text-4xl font-medium
                        md:mr-14 md:mb-9 md:static
                        absolute sm:top-52 md:top-[-10%] left-[60%] whitespace-nowrap"
          >
            <span className="text-indigo-600 text-lg md:text-5xl">
              {stats[5]["statistic"]}{" "}
            </span>
            {stats[5]["description"]}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
