const Friends: React.FC = () => {
  return (
    <div
      className="h-full text-white flex flex-col"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
    >
      <div className="w-full overflow-auto h-24 pb-4 flex items-center justify-center relative">
        <h1>Participants</h1>
      </div>
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
