import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Project, { ProjectProps } from "./project";

interface ProjectsCarouselProps {
  projects: ProjectProps[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <div className="flex justify-center mt-4">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2 md:pl-4">
              <Project
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots className="mt-4" />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
