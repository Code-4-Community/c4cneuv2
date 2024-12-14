interface ClientProps {
  image?: string;
  title?: string;
  description?: string;
  caseStudyLink: string;
  websiteLink: string;
}

const ClientCard = ({
  image,
  title,
  description,
  caseStudyLink,
  websiteLink,
}: ClientProps) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="border-2 border-gray-300 shadow-lg p-8 mb-4">
        <div className="flex justify-center mb-4">
          <img
            src={image ?? "app/icons/community.png"}
            alt={title ?? "Title"}
            className="h-40 w-40 object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">
          {title ?? "Title"}
        </h3>
        <p className="text-gray-700 text-center mb-6">
          {description ?? "lorem ipsum"}
        </p>
      </div>
      <div className="flex flex-col w-full space-y-4">
        <div className="block w-full bg-purple-200 text-purple-700 font-semibold py-2 text-center border-2 border-gray-300">
          <a href={caseStudyLink}>Project Case Study</a>
        </div>

        <div className="border-2 border-gray-300 shadow-lg block w-full bg-white-200 text-white-700 font-semibold py-2 text-center">
          <a href={websiteLink}>Client Website</a>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
