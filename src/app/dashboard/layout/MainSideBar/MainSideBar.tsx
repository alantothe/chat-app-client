interface MainSideBarProps {
  onOpenChat: () => void;
}

const MainSideBar: React.FC = () => {
  return (
    <div
      className="h-full text-white flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "rgb(18, 18, 22)" }}
    >
      <div className="flex justify-center relative py-6 ">
        <input
          className="bg-zinc-800 placeholder-zinc-600 h-12 w-11/12 rounded outline-none pl-2 placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg"
          placeholder="Search..."
        ></input>
        <div className="absolute bottom-0 left-0 right-0 w-11/12 mx-auto border-b border-white border-opacity-20"></div>
      </div>

      <div className="flex justify-center py-4">
        <div className="flex justify-evenly w-11/12 h-12 overflow-hidden ">
          <button
            className="bg-zinc-800 text-white font-thin text-sm rounded shadow"
            style={{ width: "45%" }}
          >
            Direct Messages
          </button>
          <button
            className="bg-zinc-800 text-white font-thin text-sm rounded shadow"
            style={{ width: "45%" }}
          >
            Group Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
