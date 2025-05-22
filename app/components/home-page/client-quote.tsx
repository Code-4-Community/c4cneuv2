import { LQuote, RQuote } from "../icons";

export interface QuoteProps {
  name?: string;
  role?: string;
  description?: string;
}

const ClientQuote = ({ name, role, description }: QuoteProps) => {
  return (
    <div className="pb-12 md:pb-20">
      <div className="flex flex-row items-center md:shadow border-[1px] md:border-2 border-black relative p-3 gap-1 md:p-14 md:gap-12">
        <div className="md:w-full flex flex-col">
          <div className="mb-3.5 md:mb-10">
            <div className="flex items-start">
              <LQuote className="w-8 h-8" />
            </div>

            <h3 className="break-all text-m md:text-xl leading-tight md:leading-7 px-2 py-5 md:px-11 text-center md:text-left">
              {description ?? "lorem ipsum"}
            </h3>

            <div className="flex justify-end">
              <RQuote className="w-8 h-8" />
            </div>
          </div>

          <div className="text-right leading-tight">
            <h3 className="text-right text-lg md:text-2xl font-medium">
              {name ?? "Name"}
            </h3>
            <h3 className="text-sm md:text-base">{role ?? "Title"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientQuote;
