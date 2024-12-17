const MainSection = () => {
  return (
    <div>
      <h1 className="text-5xl pb-16">
        About <span className="text-indigo-600">Code4Community</span>
      </h1>
      <div className="flex justify-center">
        <div
          className="bg-[linear-gradient(to_right_bottom,rgba(243,235,249,0.75),rgba(243,235,249,0.75)),url('app/images/main.png')]
                        bg-cover bg-no-repeat border border-black shadow-default text-4xl px-20 py-28"
        >
          Empowering through tech, fostering diversity, and leaving a lasting
          impact.
        </div>
      </div>

      <h2 className="text-4xl pt-16">Our Culture</h2>
      <h3 className="text-2xl py-16">
        At C4C, we embody a culture of purposeful innovation, where impactful,
        deliberate, and inclusive software development is not just a goal but a
        way of life. As Northeastern University’s sole student-led collective
        for charitable software development, we are driven by a mission –
        ”Empowering through tech, fostering diversity, and leaving a lasting
        impact.” Our commitment goes beyond lines of code; it&aposs a dedication
        to creating solutions that resonate with our community’s diverse needs.
        We believe in the transformative power of technology, and we leverage it
        to empower individuals, fostering a culture where every voice is heard.
        Join us in building a future where tech is a force for positive change,
        diversity is celebrated, and our impact is enduring.
      </h3>
    </div>
  );
};

export default MainSection;
