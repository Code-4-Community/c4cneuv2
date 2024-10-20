import EventsCarousel from "./events-carousel";
const eventsList = [
  {
    image: "app/icons/problem-solvers.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {
    image: "app/icons/leaders.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {
    image: "app/icons/community.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
  {
    image: "app/icons/leaders.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.",
    link: "https://en.wikipedia.org/wiki/Sirocco_(parrot)",
  },
];

const EventsSection = () => {
  return (
    <div>
      <h2 className="text-2xl py-12">Events</h2>
      <h3 className="pb-6">
        Throughout the school year, C4C hosts a variety of professional
        development and community development events, both for its internal
        members and the greater Northeastern community. See below for some of
        our past mixers, workshops, and more!
      </h3>
      <h2 className="text-2xl text-indigo-600 py-6">
        Community Development Events
      </h2>
      <EventsCarousel events={eventsList} />
      <h2 className="text-2xl pb-6 text-indigo-600">
        Professional Development Events
      </h2>
      <EventsCarousel events={eventsList} />
    </div>
  );
};

export default EventsSection;
