interface JoinTeamSectionProps {
  description: string;
}

const JoinTeamSection = ({ description }: JoinTeamSectionProps) => {
  return (
    <div className="mb-7 md:mb-10">
      <h1 className="mt-12 mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        Join Our <span className="text-indigo-600"> Team</span>
      </h1>
      <h2 className="text-indigo-600 text-xl md:text-4xl font-medium mb-4 md:mb-8">
        Students
      </h2>
      <h3 className="pb-4 md:pb-8 text-m md:text-lg">{description}</h3>
      <h2 className="text-m md:text-lg text-indigo-600 md:pb-8">
        We recruit new members prior to the start of each semester. Please learn
        more about our application process below!
      </h2>
    </div>
  );
};
export default JoinTeamSection;
