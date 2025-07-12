import { type MetaFunction } from "@remix-run/node";
import { getPrismicClient } from "~/utils/prismicio";
import Timeline from "~/components/jumpstart-page/timeline";
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
  const jumpStartData = useLoaderData<JumpstartDocument>();
  console.log("Jumpstart Data:", jumpStartData.data.timeline);
  return (
    <div className="relative flex justify-center">
      <div className="w-[90%] md:max-w-[1100px]">
        <Timeline
          timelineData={(jumpStartData.data.timeline ?? []).map((item) => ({
            title: item.title ?? "",
            description1: item.description1 ?? "",
          }))}
        />
      </div>
    </div>
  );
}
