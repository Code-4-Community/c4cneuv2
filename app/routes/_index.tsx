import { type MetaFunction } from "@remix-run/node";
import Info from "~/components/info";
import Landing from "~/components/landing";
import 'app/App.css';

export const meta: MetaFunction = () => {
  return [
    { title: "Code4Community" },
    { name: "description", content: "Welcome to Code4Community!" },
  ];
};

export default function Index() {
  const c4cPurple = '#605ACD';
  const c4cLightPurple = '#F8EDFF';
  const c4cGray = '#4A4A51';

  const weLove = ['people and causes we love.'];
  const images = ['https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
  const image = 'https://images.unsplash.com/photo-1499796683658-b659bc751db1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="main">
      <Landing
        title="Code4Community designs software solutions for"
        weLove={weLove}
        subtitle="Learn more about CodeCommunity's mission below."
        images={images}
      ></Landing>

      <Info
        title="Northeastern University's only student-led collective for charitable software development."
        description="C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community."
        image={image}
        button="Meet Our Team"
        left={true}
      ></Info>
      <Info
        title="Northeastern University's only student-led collective for charitable software development."
        description="C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community."
        image={image}
        button="Meet Our Team"
        left={false}
      ></Info>
      <Info
        title="Northeastern University's only student-led collective for charitable software development."
        description="C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community."
        image={image}
        button="Meet Our Team"
        left={true}
      ></Info>
    </div>
  );
}