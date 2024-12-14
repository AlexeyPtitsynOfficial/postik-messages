import { ChatProps, MessageProps, UserProps } from "./DataTypes";
import AvatarWithStatus from "./AvatarWthStatus";
import React from "react";
import { toggleMessagesPane } from "../../app/utils/utils";

import CircleIcon from "@mui/icons-material/Circle";

type ChatListItemProps = {
  id: string;
  unread?: boolean;
  sender: UserProps;
  messages: MessageProps[];
  selectedChatId?: string;
  setSelectedChat: (chat: ChatProps) => void;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { id, sender, messages, selectedChatId, setSelectedChat } = props;
  const selected = selectedChatId === id;
  return (
    <React.Fragment>
      <div
        className="list-none flex-col items-initial gap-2 p-4 border-b-[0.1px]"
        onClick={() => {
          toggleMessagesPane();
          setSelectedChat({ id, sender, messages });
        }}
        color="neutral"
      >
        <div className="flex flex-row space-x-1.5 space-y-1.5">
          <AvatarWithStatus online={sender.online} src={sender.avatar} />
          <div className="flex flex-col flex-1 text-sm font-semibold">
            <p>{sender.name}</p>
            <p className="font-thin text-slate-500">{sender.username}</p>
          </div>
          <div className="text-right text-sm  leading-normal">
            <p>
              {messages[0].unread && (
                <CircleIcon sx={{ fontSize: 12 }} color="primary" />
              )}
            </p>
            <p className="hidden sm:block text-nowrap text-xs font-bold text-slate-500">
              5 mins ago
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-ellipsis text-sm text-slate-500 font-thin">
          {messages[0].content}
        </p>
      </div>
      <div style={{ margin: 0 }} />
    </React.Fragment>
  );
};

export default ChatListItem;
