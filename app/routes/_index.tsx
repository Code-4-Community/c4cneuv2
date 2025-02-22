import { type MetaFunction } from "@remix-run/node";
import WeAreBlock from "~/components/home-page/we-are-block";
import MissionStatement from "~/components/home-page/landing";
import JoinTeamSection from "~/components/home-page/join-team";

export const meta: MetaFunction = () => {
  return [
    { title: "Code4Community" },
    { name: "description", content: "Welcome to Code4Community!" },
  ];
};

const c4cPurple = "#605ACD";

const weLove = "people and causes we love.";
const images = [
  "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//IMG_7712.jpg",
  "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//Screenshot%202025-01-30%20at%204.04.07%20PM.png",
  "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//shelterlink%20(1).jpg",
  "https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const image =
  "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//IMG_0440.jpg";

const image2 =
  "https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//Screenshot%202025-02-21%20at%202.13.40%20AM.png";

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:max-w-[1100px]">
        <MissionStatement
          weLove={weLove}
          subtitle="Learn more about Code4Commmunity's mission below."
          images={images}
        />

        <div className="flex flex-col md:flex-row">
          <div>
            <p
              className="text-3xl md:text-5xl font-medium mb-10 md:mb-2"
              style={{ color: c4cPurple }}
            >
              We are
            </p>
            <WeAreBlock
              title="Northeastern University's only student-led collective for charitable software development."
              description="C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community."
              image={image}
              buttonText="Meet Our Team"
              left={false}
            />
            <WeAreBlock
              title="Delivering impactful, deliberate and inclusive software at no cost."
              description="C4C strives to deliver work engineered with excellence and led by inclusive design principles to ensure our solutions are intuitive, performant, and deliver the best user experience."
              image={image2}
              buttonText="See Our Projects"
              left={true}
            />
            <WeAreBlock
              title="Empowering through tech, fostering diversity, and leaving a lasting impact."
              description="C4C is a dynamic and inclusive community that empowers students with aspirations in the tech industry. We are a hub for fostering collaboration, skill development, and real-world experience, creating a supportive environment for students to thrive in the rapidly evolving fields of software development, product management, and product design."
              image="https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//nefac%20(1).jpg"
              buttonText="Learn More"
              left={false}
            />
          </div>
        </div>

        <JoinTeamSection />

        <div className="mt-20 mb-16">
          <img
            src="https://rdwnhypfduxqjqtibscs.supabase.co/storage/v1/object/public/photos//Screenshot%202025-02-21%20at%202.15.06%20AM.png"
            alt="C4C"
            className="hidden md:block h-72 w-full object-cover shadow-small border-[2px] border-[#4A4A51]"
          />
        </div>
      </div>
    </div>
  );
}
