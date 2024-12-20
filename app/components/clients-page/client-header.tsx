import { SoftwareEngineer, LQuote, RQuote } from "../icons";

const ClientHeader = () => {
  return (
    <div className="pb-12 md:pb-20">
      <h1 className="text-2xl md:text-5xl pb-8 md:pb-16 font-medium">
        Meet the <span className="text-indigo-600">Clients</span>
      </h1>
      <div className="flex flex-row items-center md:shadow border-[1px] md:border-2 border-black relative p-3 gap-1 md:p-14 md:gap-12">
        <div className="md:w-2/3 flex flex-col">
          <div className="mb-3.5 md:mb-10">
            <div className="flex items-start">
              <LQuote className="w-3 h-3 md:w-8 md:h-8" />
            </div>

            <h3 className="text-[8px] md:text-xl leading-tight md:leading-7 px-2 md:px-11 font-medium">
              If the members of C4C are any indication of our future movers and
              shakers, we are in good hands. We were given frequent updates and
              they paid attention to every single detail, ensuring that the user
              experience was seamless and easy to follow. 2020 has been
              challenging on many fronts and our organization has been truly
              touched that the team remains so attentive and driven to complete
              the project in the midst of a global pandemic.
            </h3>
            <div className="flex justify-end">
              <RQuote className="w-3 h-3 md:w-8 md:h-8" />
            </div>
          </div>

          <div className="text-right leading-tight">
            <h3 className="text-[10px] md:text-2xl font-medium">
              Jackie Walker
            </h3>
            <h3 className="text-[8px] md:text-base">
              Director of Programs at Lucy's Love Bus
            </h3>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <SoftwareEngineer className="w-36 h-36 md:w-72 md:h-72" />
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
