import { SoftwareEngineer, LQuote, RQuote } from "../icons";

export interface QuoteProps {
  client?: string;
  title?: string;
  quote?: string;
}

const PartnerHeader = ({ client, title, quote }: QuoteProps) => {
  return (
    <div className="pb-12 md:pb-20">
      <h1 className="mt-12 mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Meet our <span className="text-indigo-600">Partner Organizations</span>
      </h1>
      <div className="flex flex-row items-center md:shadow border-[1px] md:border-2 border-black relative p-3 gap-1 md:p-14 md:gap-12">
        <div className="md:w-2/3 flex flex-col">
          <div className="mb-3.5 md:mb-10">
            <div className="flex items-start">
              <LQuote className="w-8 h-8" />
            </div>

            <h3 className="text-m md:text-xl leading-tight md:leading-7 px-2 py-5 md:px-11 text-center md:text-left">
              {quote ?? "lorem ipsum"}
            </h3>

            <div className="flex justify-end">
              <RQuote className="w-8 h-8" />
            </div>
          </div>

          <div className="text-right leading-tight">
            <h3 className="text-lg md:text-2xl font-medium">
              {client ?? "Name"}
            </h3>
            <h3 className="text-sm md:text-base">{title ?? "Title"}</h3>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:w-1/3">
          <SoftwareEngineer className="w-36 h-36 md:w-72 md:h-72" />
        </div>
      </div>
    </div>
  );
};

export default PartnerHeader;
