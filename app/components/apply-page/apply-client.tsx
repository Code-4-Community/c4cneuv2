import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import Alert from "./alert";

const ApplyClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const response = fetch(
      "https://mvr9mqaxzh.execute-api.us-east-2.amazonaws.com/c4c-website-contact-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          emailAddress: email,
          message: message,
        }),
      },
    );
    response
      .then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setShowError(true);
      });
  };

  return (
    <div className="w-full mb-20">
      {showSuccess && (
        <Alert
          type="success"
          message="Your message has been sent successfully!"
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <Alert
          type="error"
          message="There was an error sending your message. Please try again."
          onClose={() => setShowError(false)}
        />
      )}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#F8EDFF] hover:bg-[#EED2FF] text-[#333333] w-32 font-semibold py-2 shadow-small border-[2px] border-[#4A4A51]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplyClient;
