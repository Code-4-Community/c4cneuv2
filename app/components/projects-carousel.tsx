import { Key } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import Project from "./project"
import { asText } from "@prismicio/client";

interface ProjectsCarouselProps {
    projects: { image?: string; title?: string; subtitle?: string; description?: string; link?: string; }[];
}

const ProjectsCarousel = ({
    projects
}: ProjectsCarouselProps) => {
    return (
        <div className="flex flex-col items-center">
            <Carousel className="w-full max-w-sm">
                <CarouselContent>
                    {projects.map((project, index) => (<CarouselItem key={index}><Project
                        image={project.image}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        link={project.link} /></CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselDots className="mt-4" />
            </Carousel>
        </div>
    )
};

export default ProjectsCarousel;

