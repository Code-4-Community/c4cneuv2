import { type MetaFunction } from "@remix-run/node";
import FAQCard from "~/components/jumpstart-page/faq-card";
import JumpstartIntro from "~/components/jumpstart-page/main-section";
// import { getPrismicClient } from "~/utils/prismicio";

export const meta: MetaFunction = () => {
  return [
    { title: "C4C Jumpstart" },
    {
      name: "C4C Jumpstart Page",
      content: "Learn more about our Jumpstart program",
    },
  ];
};

// export const loader = async () => {
//   const client = await getPrismicClient();
// };

export default function Jumpstart() {
  const faqs = [
    {
      question: "What is Jumpstart?",
      answer:
        "Jumpstart is a full stack development program designed for first-time developers to gain hands-on experience in building web applications.",
    },
    {
      question: "Who can apply?",
      answer:
        "Jumpstart is open to all first-time developers who are eager to learn and contribute to real-world projects.",
    },
    {
      question: "What skills will I learn?",
      answer:
        "Participants will learn full stack development, including front-end and back-end technologies, version control, and agile methodologies.",
    },
  ];
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-[1%] md:top-0 left-0 w-[100%] md:w-[60%] aspect-square bg-purple-radial-gradient-left z-[-1] "></div>
      <div className="absolute top-1/3 right-0 w-[100%] md:w-[60%] aspect-square bg-pink-radial-gradient-right z-[-1] "></div>
      <div className="w-[90%] md:max-w-[1100px]">
        <JumpstartIntro
          description="Our brand new full stack development program for our first time developers."
          signUpLink="https://forms.gle/bDNMmxxJyTX3na496"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28 items-center">
          {faqs.map((faq, index) => (
            <div key={index} className="h-full">
              <FAQCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
