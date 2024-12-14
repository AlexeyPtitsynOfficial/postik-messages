import { ChatProps } from "./DataTypes";

import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toggleMessagesPane } from "../../app/utils/utils";
import ChatListItem from "./ChatListItem";

type ChatsPaneProps = {
  chats: ChatProps[];
  setSelectedChat: (chat: ChatProps) => void;
  selectedChatId: string;
};

const ChatsPane = (props: ChatsPaneProps) => {
  const { chats, setSelectedChat, selectedChatId } = props;

  return (
    <div className="flex flex-col h-screen overflow-y-scroll border-r-[1px] bg-white">
      <div className="flex flex-row align-middle space-x-1 space-y-1 items-center justify-between p-2 pt-5 pb-1.5">
        <h1 className="flex flex-row justify-center space-x-2 m-2">
          <span className="font-bold">Сообщения</span>
          <span className="chip">4</span>
        </h1>
        <button className="hidden sm:unset" aria-label="edit" color="neutral">
          <EditNoteRoundedIcon />
        </button>
        <button
          className="hidden sm:unset"
          aria-label="edit"
          color="neutral"
          onClick={() => toggleMessagesPane()}
        >
          <CloseRoundedIcon />
        </button>
      </div>
      <div className="flex flex-row px-4 pb-1.5 items-center">
        <input
          className="input-search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <div className="absolute pl-1">
          <SearchRoundedIcon />
        </div>
      </div>
      <div className="flex-column py-0">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            {...chat}
            setSelectedChat={setSelectedChat}
            selectedChatId={selectedChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatsPane;
