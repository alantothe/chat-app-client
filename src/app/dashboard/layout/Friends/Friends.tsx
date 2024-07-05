const Friends: React.FC = () => {
  return (
    <div
      className="h-full text-white flex flex-col"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
    >
      <header className="w-full h-24 mt-5 pb-4 flex items-center justify-center relative">
        {/* <h1>Contacts</h1> */}
      </header>
      <div className="flex-grow p-5 flex flex-col overflow-hidden ">
        <div className="flex-grow overflow-auto scrollbar scrollbar-thumb-grey-900 scrollbar-track-zinc-900">
          <h2>Online</h2>

          <h2>Offline </h2>
        </div>
      </div>
    </div>
  );
};

export default Friends;
