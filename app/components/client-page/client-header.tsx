import { SoftwareEngineer, LQuote, RQuote } from "../icons";

const ClientHeader = () => {
  return (
    <div className="pb-20">
      <h1 className="text-5xl pb-16">
        Meet the <span className="text-indigo-600">Clients</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center shadow-default border border-black relative p-14 gap-12">
        <div className="md:w-2/3 flex flex-col">
          <div className="mb-10">
            <div className="flex items-start">
              <LQuote className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <h3 className="text-xl leading-6 px-11">
              If the members of C4C are any indication of our future movers and
              shakers, we are in good hands. We were given frequent updates and
              they paid attention to every single detail, ensuring that the user
              experience was seamless and easy to follow. 2020 has been
              challenging on many fronts and our organization has been truly
              touched that the team remains so attentive and driven to complete
              the project in the midst of a global pandemic.
            </h3>
            <div className="flex justify-end">
              <RQuote className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-2xl">Jackie Walker</h3>
            <h3>Director of Programs at Lucy's Love Bus</h3>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <SoftwareEngineer className="w-64 h-64 md:w-72 md:h-72" />
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
