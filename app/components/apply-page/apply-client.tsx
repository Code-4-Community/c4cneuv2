const ApplyClient = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="pb-8">
        <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Clients</h1>
        <p>
          Are you a nonprofit organization in the greater Boston area? If you
          would like further information about Code4Community or wish to discuss
          a project with us, drop us an email by filling out the form below!
        </p>
      </div>
      <div className="flex flex-row gap-4 pb-8">
        <div className="w-full">
          <label htmlFor="nameInput" className="font-semibold block pb-1">
            Name*
          </label>
          <input
            id="nameInput"
            name="nameInput"
            defaultValue="Your Name"
            className="w-full border border-gray-400 p-3 rounded-md text-gray-700"
          />
        </div>
        <div className="w-full">
          <label htmlFor="emailInput" className="font-semibold block pb-1">
            Email*
          </label>
          <input
            id="emailInput"
            name="emailInput"
            defaultValue="Your Email Address"
            className="w-full border border-gray-400 p-3 rounded-md text-gray-700"
          />
        </div>
      </div>
      <div className="pb-8">
        <label htmlFor="messageInput" className="font-semibold block pb-1">
          Message*
        </label>
        <textarea
          id="messageInput"
          name="messageInput"
          defaultValue="Your Message"
          className="w-full h-40 border border-gray-400 p-3 rounded-md text-gray-700 resize-none"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-24 bg-purple-200 text-black-700 font-semibold py-2 text-center border-2 border-gray-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplyClient;
