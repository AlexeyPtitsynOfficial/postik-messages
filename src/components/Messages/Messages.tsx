import { useState } from "react";
import { ChatProps } from "./DataTypes";
import { chats } from "./data";

import MessagesPane from "./MessagesPane";
import ChatsPane from "./ChatsPane";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<ChatProps>(chats[0]);
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        //mx: "auto",
        //pt: { xs: "var(--Header-height)", sm: 0 },
        display: "grid",
        /*gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(min-content, min(10%, 200px)) 1fr",
        },*/
      }}
    >
      <div
        style={{
          /*position: { xs: "fixed", sm: "sticky" },
          transform: {
            xs: "translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))",
            sm: "none",
          },*/
          transition: "transform 0.4s, width 0.4s",
          zIndex: 100,
          width: "100%",
          top: 52,
        }}
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </div>
      <MessagesPane chat={selectedChat} />
    </div>
  );
};

export default Messages;
