import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Project, { ProjectProps } from "./project";

export interface ProjectsCarouselProps {
  projects: ProjectProps[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <div className="flex flex-col justify-center mt-4  ">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="flex flex-row -ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 pl-2 md:pl-4 "
            >
              <Project
                logo={project.logo}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
                has_case={project.has_case}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4">
          <CarouselPrevious />
        </div>
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
