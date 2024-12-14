"use client";
import { useState } from "react";
import { ChatProps } from "../../components/Messages/DataTypes";
import { chats } from "../../components/Messages/data";

import MessagesPane from "../../components/Messages/MessagesPane";
import ChatsPane from "../../components/Messages/ChatsPane";
import { NextPage } from "next";

const Messages: NextPage = () => {
  const [selectedChat, setSelectedChat] = useState<ChatProps>(chats[0]);

  return (
    <div className="flex flex-row flex-1 w-full mx-auto">
      <div
        className="fixed translate-x-mess z-50 border-slate-100 sm:sticky sm:min-w-[200px] sm:max-w-min sm:transform-none "
        style={{
          transition: "transform 0.4s, width 0.4s",
        }}
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </div>
      <div className="grow">
        <MessagesPane chat={selectedChat} />
      </div>
    </div>
  );
};

export default Messages;
