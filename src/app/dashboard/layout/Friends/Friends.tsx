import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import getLimitedUser from "@/api/get/getLimitedUser";
import Avatar from "@/hooks/Avatar";
import { Friend } from "../../../../../types";

const Friends: React.FC = () => {
  const userData = useAppSelector((state) => state.userReducer);
  const [friendsData, setFriendsData] = useState<Friend[]>([]);

  useEffect(() => {
    if (userData && userData.friends && userData.friends.length > 0) {
      getLimitedUser(userData.friends)
        .then((data) => {
          setFriendsData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userData]);

  return (
    <div
      className="h-full text-white flex flex-col"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
    >
      <div className="w-full overflow-auto h-24 pb-4 flex items-center justify-center relative">
        <h1>Participants[{userData.friends.length}]</h1>
      </div>
      <div className="flex-grow p-5 flex flex-col overflow-hidden">
        {friendsData.length > 0 ? (
          friendsData.map((friend) => (
            <div
              key={friend._id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <Avatar size="md" url={friend.avatar} />
                <div className="flex ">
                  <h3 className="ml-2 text-xs">{friend.firstName}</h3>
                  <h3 className="ml-2 text-xs">{friend.lastName}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No friends found.</p>
        )}
      </div>
    </div>
  );
};

export default Friends;
