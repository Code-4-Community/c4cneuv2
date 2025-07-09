import { type MetaFunction } from "@remix-run/node";
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
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Jumpstart Page</h1>
      <p className="text-lg">This is a placeholder for the Jumpstart page.</p>
    </div>
  );
}
