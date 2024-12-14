import { useEffect, useState } from "react";
import { ChatProps, MessageProps } from "./DataTypes";
import MessagePaneHeader from "./MessagePaneHeader";

import MessageInput from "./MessageInput";

import ChatBubble from "./ChatBubble";
import AvatarWithStatus from "./AvatarWthStatus";

type MessagesPaneProps = {
  chat: ChatProps;
};

const MessagesPane = (props: MessagesPaneProps) => {
  const { chat } = props;
  const [chatMessages, setChatMessages] = useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    setChatMessages(chat.messages);
  }, [chat.messages]);

  return (
    <div className="flex flex-col h-screen relative border-slate-100">
      <MessagePaneHeader sender={chat.sender} />
      <div className="flex flex-1 flex-col-reverse h-min-0 overflow-y-scroll pt-3 pr-2 bg-slate-100 border-white">
        <div className="flex flex-col flex-end gap-4">
          {chatMessages.map((message: MessageProps, index: number) => {
            const isYou = message.sender === "You";
            return (
              <div
                className={isYou ? "flex flex-row-reverse" : "flex flex-row"}
                key={index}
              >
                {message.sender !== "You" && (
                  <div className="m-2">
                    <AvatarWithStatus
                      online={message.sender.online}
                      src={message.sender.avatar}
                    />
                  </div>
                )}
                <ChatBubble
                  variant={isYou ? "sent" : "received"}
                  {...message}
                />
              </div>
            );
          })}
          <div className="h-10">&nbsp;</div>
        </div>
      </div>
      <MessageInput
        textAreaValue={textAreaValue}
        setInputValue={setTextAreaValue}
        onSubmit={() => {
          const newID = chatMessages.length + 1;
          const newIDString = newID.toString();
          setChatMessages([
            ...chatMessages,
            {
              id: newIDString,
              sender: "You",
              content: textAreaValue,
              timestamp: "Just now",
            },
          ]);
        }}
      />
    </div>
  );
};

export default MessagesPane;
