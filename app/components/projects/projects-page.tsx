import ProjectsCarousel, { ProjectsCarouselProps } from "./projects-carousel";

const ProjectsPage = ({ projects }: ProjectsCarouselProps) => {
  return (
    <div className="p-4">
      <div className="flex-col justify-start items-start gap-[13px] inline-flex">
        <h1 className="text-black font-medium text-5xl font-['IBM Plex Sans'] leading-10">
          Projects
        </h1>
        <h3 className="text-center text-[#333333] text-2xl font-medium font-['IBM Plex Sans'] leading-7">
          Take a look at some of the work we've done!
        </h3>
      </div>
      <ProjectsCarousel projects={projects} />
    </div>
  );
};

export default ProjectsPage;
