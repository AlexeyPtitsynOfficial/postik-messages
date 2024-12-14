import { UserProps } from "./DataTypes";

import { toggleMessagesPane } from "../../app/utils/utils";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CircleIcon from "@mui/icons-material/Circle";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

type MessagePaneHeaderProps = {
  sender: UserProps;
};
const MessagePaneHeader = (props: MessagePaneHeaderProps) => {
  const { sender } = props;

  return (
    <div className="flex flex-row justify-between pt-2 pr-1 pl-4 sm:pr-2 border-b-[1px]">
      <div className="flex flex-row space-1 sm:space-2 items-center">
        <button
          className="icon-button xs:inline-flex sm:hidden"
          onClick={() => toggleMessagesPane()}
        >
          <ArrowBackIosNewRoundedIcon />
        </button>
        <div className="flex w-10 h-10 m-4 items-center">
          <img src={sender.avatar} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center gap-2">
            <h1 className="font-bold">{sender.name}</h1>
            {sender.online ? (
              <div className="border rounded-md text-sm px-1">
                <CircleIcon sx={{ fontSize: 8 }} color="success" />
                <span>Online</span>
              </div>
            ) : undefined}
          </div>
          <p className="text-sm text-slate-600">{sender.username}</p>
        </div>
      </div>
      <div className="flex flex-row space-x-1 items-center">
        <button className="button hidden  sm:inline-flex">
          <PhoneInTalkRoundedIcon />
          Позвонить
        </button>
        <button className="button">
          <a color="neutral" href="/profile">
            Профиль
          </a>
        </button>
        <button className="icon-button">
          <MoreVertRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default MessagePaneHeader;
