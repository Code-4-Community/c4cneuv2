import { type MetaFunction } from "@remix-run/node";
import WeAreBlock from "~/components/home-page/we-are-block";
import MissionStatement from "~/components/home-page/landing";

export const meta: MetaFunction = () => {
  return [
    { title: "Code4Community" },
    { name: "description", content: "Welcome to Code4Community!" },
  ];
};

export default function Index() {
  const c4cPurple = '#605ACD';

  const weLove = ['people and causes we love.'];
  const images = ['https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
  const image = 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <div className="mt-60 ml-96 mr-96 mb-32">
        <MissionStatement
          weLove={weLove}
          subtitle="Learn more about CodeCommunity's mission below."
          images={images}
        ></MissionStatement>

        <p className="text-4xl mb-2" style={{ color: c4cPurple }}>We Are</p>
        <WeAreBlock
          title="Northeastern University's only student-led collective for charitable software development."
          description="C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community."
          image={image}
          buttonText="Meet Our Team"
          left={true}
        ></WeAreBlock>
        <WeAreBlock
          title="Delivering impactful, deliberate and inclusive software at no cost."
          description="C4C strives to deliver work engineered with excellence and led by inclusive design principles to ensure our solutions are intuitive, performant, and deliver the best user experience."
          image={image}
          buttonText="See Our Projects"
          left={false}
        ></WeAreBlock>
        <WeAreBlock
          title="Empowering through tech, fostering diversity, and leaving a lasting impact."
          description="C4C is a dynamic and inclusive community that empowers students with aspirations in the tech industry. We are a hub for fostering collaboration, skill development, and real-world experience, creating a supportive environment for students to thrive in the rapidly evolving fields of software development, product management, and product design."
          image={image}
          buttonText="Learn More"
          left={true}
        ></WeAreBlock>
      </div>
    </div>

  );
}