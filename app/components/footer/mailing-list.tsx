import C4C from "../icons/C4C";

export default function MailingList() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-[34px] flex justify-center items-center">
        <C4C />
      </div>
      <div className="hidden">
        <label
          className="text-[#333333] text-2xl font-medium"
          htmlFor="mailing-list-input"
        >
          Never Miss an Announcement!
        </label>
        <div className="flex w-full max-w-md shadow-small mt-4">
          <input
            id="mailing-list-input"
            type="email"
            placeholder="Email"
            className="flex-1 h-12 px-4 border border-r-0 border-[#4a4951] focus:outline-none object-cover shadow-small"
          />
          <button
            type="submit"
            className="px-6 bg-[#f8ecff] border bg-[#E7E5EE] text-[#CAC9D0] border-[#9A98A2] pointer-events-none text-sm font-bold"
          >
            Join Mailing List!
          </button>
        </div>
      </div>
    </div>
  );
}
