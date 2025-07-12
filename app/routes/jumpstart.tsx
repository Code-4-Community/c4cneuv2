import { type MetaFunction } from "@remix-run/node";
import FAQCard from "~/components/jumpstart-page/faq-card";
import JumpstartIntro from "~/components/jumpstart-page/main-section";
import { getPrismicClient } from "~/utils/prismicio";
import { JumpstartDocument } from "types.generated";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Jumpstart" },
    {
      name: "C4C Jumpstart Page",
      content: "Learn more about our Jumpstart program",
    },
  ];
};

export const loader = async () => {
  const client = await getPrismicClient();
  return await client.getSingle<JumpstartDocument>("jumpstart");
};

export default function Jumpstart() {
  const jumpstartData = useLoaderData<JumpstartDocument>().data;
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-[1%] md:top-0 left-0 w-[100%] md:w-[60%] aspect-square bg-purple-radial-gradient-left z-[-1] "></div>
      <div className="absolute top-1/3 right-0 w-[100%] md:w-[60%] aspect-square bg-pink-radial-gradient-right z-[-1] "></div>
      <div className="w-[90%] md:max-w-[1100px]">
        <JumpstartIntro
          description={jumpstartData.description}
          signUpLink={jumpstartData.signup}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28 items-center">
          {(jumpstartData.faqs ?? []).map((faq, index) => (
            <div key={index} className="h-full">
              <FAQCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
