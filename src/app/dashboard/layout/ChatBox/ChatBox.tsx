import { useAppSelector } from "@/redux/hooks";



const ChatBox: React.FC = () => {
  const userData = useAppSelector((state) => state.userReducer)

  console.log("userData:", userData.openConversation);
  
  return (
    <div
      className="h-full text-white flex flex-col"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
    >
      <>
        <header className="h-24 relative flex-shrink-0">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <h1>Welcome! Select a Friend to Chat</h1>
          </div>
          <div
            style={{ width: "95%" }}
            className="mx-auto absolute bottom-0 left-0 right-0 border-b border-white border-opacity-20"
          ></div>
        </header>

        <div className="overflow-y-auto flex-grow flex items-center justify-center">
          <h2 className="text-3xl">Center</h2>
        </div>
      </>

      {/* Chat Input Below */}
      <footer className="flex w-full px-5 justify-center flex-shrink-0 mb-5">
        <div className="relative w-full px-3 h-12">
          <input
            name="message"
            className={`w-full rounded py-2 bg-zinc-900 h-full  pr-12 placeholder-zinc-700 text-white mb-5 pl-12 outline-none`}
            placeholder="Message ..."
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-6 flex items-center"></div>
          <div className="absolute inset-y-0 left-6 flex items-center"></div>
        </div>
      </footer>
    </div>
  );
};

export default ChatBox;
