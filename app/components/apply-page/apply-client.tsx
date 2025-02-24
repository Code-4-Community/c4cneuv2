import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
const ApplyClient = () => {
  return (
    <div className="w-full mb-20">
      <div className="pb-8">
        <h2 className="text-indigo-600 text-xl md:text-4xl font-medium mb-2 md:mb-8">
          Partner Organizations
        </h2>
        <p>
          Are you a nonprofit organization in the greater Boston area? If you
          would like further information about Code4Community or wish to discuss
          a project with us, drop us an email by filling out the form below!
        </p>
      </div>
      <div className="flex flex-row gap-4 pb-8">
        <div className="w-full">
          <Label className="font-semibold block pb-1" htmlFor="Name">
            Name*
          </Label>
          <Input
            className="w-full border border-gray-400 p-3 rounded-md text-gray-700"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="w-full">
          <Label className="font-semibold block pb-1" htmlFor="Email">
            Email*
          </Label>
          <Input
            className="w-full border border-gray-400 p-3 rounded-md text-gray-700"
            type="text"
            id="email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="pb-8">
        <Label className="font-semibold block pb-1" htmlFor="message">
          {" "}
          Message*
        </Label>
        <Textarea
          className="w-full h-40 border border-gray-400 p-3 rounded-md text-gray-700"
          placeholder="Your Message"
          id="message"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] w-32 font-semibold py-2 shadow-small border-[2px] border-[#4A4A51]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplyClient;
