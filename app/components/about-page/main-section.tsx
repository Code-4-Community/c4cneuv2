interface MainSectionProps {
  tagline: string;
  culture_description: string;
}

const MainSection = ({ tagline, culture_description }: MainSectionProps) => {
  return (
    <div>
      <h1 className="mt-12 mb-9 md:mt-[120px] md:mb-[72px] text-2xl md:text-5xl font-medium shrink-0">
        About <span className="text-indigo-600">Code4Community</span>
      </h1>
      <div className="flex justify-center">
        <div
          className="bg-[linear-gradient(to_right_bottom,rgba(243,235,249,0.75),rgba(243,235,249,0.75)),url('app/images/main.png')]
                        bg-cover bg-no-repeat border border-black shadow
                        text-lg px-6 py-10
                        md:text-3xl md:px-48 md:py-32
                        font-medium"
        >
          {/* Empowering through tech, fostering diversity, and leaving a lasting
          impact. */}
          {tagline}
        </div>
      </div>

      <h2 className="text-xl mt-16 font-medium md:text-4xl md:mt-20">
        Our Culture
      </h2>
      <h3 className="text-m my-14 md:text-xl md:my-16">
        {/* At C4C, we embody a culture of purposeful innovation, where impactful,
        deliberate, and inclusive software development is not just a goal but a
        way of life. As Northeastern University’s sole student-led collective
        for charitable software development, we are driven by a mission –
        ”Empowering through tech, fostering diversity, and leaving a lasting
        impact.” Our commitment goes beyond lines of code; it&aposs a dedication
        to creating solutions that resonate with our community’s diverse needs.
        We believe in the transformative power of technology, and we leverage it
        to empower individuals, fostering a culture where every voice is heard.
        Join us in building a future where tech is a force for positive change,
        diversity is celebrated, and our impact is enduring. */}
        {culture_description}
      </h3>
    </div>
  );
};

export default MainSection;
