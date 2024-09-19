import { type MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Code4Community" },
    { name: "description", content: "Welcome to Code4Community!" },
  ];
};

export default function Index() {
  const c4cPurple = '#605ACD';
  const c4cLightPurple = '#F8EDFF'
  const c4cGray = '#4A4A51'
  return (
    <div className="m-20">
      <h1><b>Code4Community designs software solutions for</b></h1>
      <h1><b>people and causes we love.</b></h1>
      <br />
      <h3>Learn more about Code4Community's mission below.</h3>
      <div id="photos-1">
      </div>
      <br /> <br />

      <div id="we-are">
        <h1>We Are</h1>
        <h3>Northeastern University's only student-led collective for charitable software development.</h3>
        <p>C4C is led by Northeastern students who are passionate about developing meaningful and exciting products. Students have the opportunity to learn the fundamentals of product and software development, while also contributing to the Boston community.</p>
        <button>Meet Our Team</button>
        <br /> <br />

        <h3>Delivering impactful, deliberate and inclusive software at no cost.</h3>
        <p>C4C strives to deliver work engineered with excellence and led by inclusive design principles to ensure our solutions are intuitive, performant, and deliver the best user experience.</p>
        <button>See Our Projects</button>
        <br /> <br />

        <h3>Empowering through tech, fostering diversity, and leaving a lasting impact.</h3>
        <p>C4C is a dynamic and inclusive community that empowers students with aspirations in the tech industry. We are a hub for fostering collaboration, skill development, and real-world experience, creating a supportive environment for students to thrive in the rapidly evolving fields of software development, product management, and product design.</p>
        <button>Learn More</button>
        <br /> <br />
      </div>

      <div id="clients-members">
        <h1>Hear from Clients and Members</h1>
        <br />
        <div>
          <p>If the members of C4C are any indication of our future movers and shakers, we are in good hands. We were given frequent updates and they paid attention to every single detail, ensuring that the user experience was seamless and easy to follow. 2020 has been challenging on many fronts and our organization has been truly touched that the team remains so attentive and driven to complete the project in the midst of a global pandemic.</p>
          <p>Jackie Walker</p>
          <p>Director of Programs at Lucy's Love Bus</p>
          <br /><br />
        </div>

        <div>
          <p>Code4Community is a stellar example of a student organization that changes the world. At Code4Community you will apply and improve your skills, while helping non-profits increase efficiency and modernize. The work you do will touch and benefit the lives of those who need it most for years to come. Code4Community has showed me the power of software and has inspired me to use my skills to help make the world a better place.</p>
          <p>Stephen Alt</p>
          <p>Founder of Code4Community</p>
          <br /> <br />
        </div>

        <div>
          <p>I've learned to build, lead, and collaborate with teams of developers and designers, all of which has prepared me very much for working in the industry. To be able to learn so much, and see the impact we have on our partner organizations, makes me very grateful to be a part of this organization.</p>
          <p>Jack Blanc</p>
          <p>Former Director of Engineering</p>
          <br /> <br />
        </div>
      </div>

      <div id="join-our-team">
        <h1>Join Our Team!</h1>
        <p>Are you passionate about making a positive impact through technology? Do you have a knack for coding, designing, or managing projects? Join Us!</p>
        <p>C4C Recruits talented individuals like you to join our team prior to the start of each semester. Check out our open positions below!</p>
        <button>Apply</button>
        <br />
        <div>
          <h3>Software Developer</h3>
          <p>Developers write the code that make our projects a reality. Help us tackle tough technical problems while creating the code that powers C4C!</p>
          <button>Learn More</button>
        </div>
        <br />
        <div>
          <h3>Product Manger</h3>
          <p>Product Managers scope out our products and prioritize the team's work. Help us take the vision of our clients and turn it into a reality!</p>
          <button>Learn More</button>
        </div>
        <br />
        <div>
          <h3>Software Developer</h3>
          <p>Designers create the look and feel of our products. Take an idea from conception to delivery while defining our user's experience.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}