import { SoftwareEngineer, LQuote, RQuote } from "../icons";

export interface QuoteProps {
  client?: string;
  title?: string;
  quote?: string;
}

const ClientHeader = ({ client, title, quote }: QuoteProps) => {
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
              {quote ?? "lorem ipsum"}
            </h3>
            <div className="flex justify-end">
              <RQuote className="w-3 h-3 md:w-8 md:h-8" />
            </div>
          </div>

          <div className="text-right leading-tight">
            <h3 className="text-[10px] md:text-2xl font-medium">
              {client ?? "Name"}
            </h3>
            <h3 className="text-[8px] md:text-base">{title ?? "Title"}</h3>
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
