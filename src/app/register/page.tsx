export default function ComponentName() {
  return (
    <div>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <section className="bg-[#0C162D] opacity-95 p-4 rounded-lg w-96">
          <header className=" justify-start">
            <h3 className="font-mono text-sm text-white opacity-50 justify-start">
              Welcome to Chattothe!
            </h3>
            <h3 className="mb-4 font-mono text-sm text-white opacity-50 justify-start">
              Let&apos;s begin the adventure
            </h3>
          </header>
          <form className="flex flex-col item-center">
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Enter your email*{" "}
            </label>
            <input
              className="text-white mb-5 font-mono text-sm  p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md "
              type="email"
              id="email"
              name="email"
            ></input>
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Enter your first name*{" "}
            </label>
            <input
              className="text-white mb-5 font-mono text-sm  p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md "
              id="firstName"
              name="firstName"
            ></input>
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Enter your last name*{" "}
            </label>
            <input
              className="text-white mb-5 font-mono text-sm  p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md "
              id="lastName"
              name="lastName"
            ></input>
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Create a password*{" "}
            </label>

            <input
              className="text-white mb-5 font-mono text-sm  p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md "
              type="password"
              id="password"
            ></input>

            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Upload your avatar:
            </label>
          </form>
          <footer>
            <h1 className="font-mono text-sm text-white opacity-50 text-center pt-5">
              Already have an account?{" "}
              <span className="text-white opacity-100 hover:underline cursor-pointer">
                Sign in
              </span>
            </h1>
          </footer>
        </section>
      </div>
    </div>
  );
}
