interface ProjectProps {
    image?: string;
    name?: string;
    tagline?: string;
    description?: string;
    caseStudy?: string;
}

const Project = ({
    image,
    name,
    tagline,
    description,
    caseStudy,
}: ProjectProps) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                src={image}
                alt={name}
                className="w-48 h-48 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm text-gray-500 mb-4">{tagline}</p>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <div className="flex space-x-4">
                {caseStudy && (
                    <a href={caseStudy} className="text-gray-600">
                        <button>View Case Study</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
