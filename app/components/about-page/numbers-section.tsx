const NumbersSection = () => {
  return (
    <div>
      <h2 className="text-3xl pb-16">By the Numbers</h2>
      <div className="flex justify-center columns-3">
        <div>
          <h2 className="text-4xl pl-10 pb-9">
            <span className="text-indigo-600 text-5xl">50+ </span>
            active members
          </h2>
          <h2 className="text-4xl pl-16 pb-9">
            <span className="text-indigo-600 text-5xl">5 </span>
            websites deployed
          </h2>
          <h2 className="text-4xl pb-9">
            <span className="text-indigo-600 text-5xl">10 </span>
            nonprofit partners
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            src="app/images/numbers.png"
            alt="Illustration"
            className="w-80 h-auto"
          />
        </div>
        <div className="text-right">
          <h2 className="text-4xl pr-14 pb-9">
            <span className="text-indigo-600 text-5xl">10k </span>
            lines of code
          </h2>
          <h2 className="text-4xl pr-28 pb-9">
            <span className="text-indigo-600 text-5xl">500 </span>
            pull requests
          </h2>
          <h2 className="text-4xl pb-9">
            <span className="text-indigo-600 text-5xl">100k </span>
            users
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
