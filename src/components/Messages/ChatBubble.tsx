import { useState } from "react";
import { MessageProps } from "./DataTypes";

import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type ChatBubbleProps = MessageProps & {
  variant: "sent" | "received";
};

const ChatBubble = (props: ChatBubbleProps) => {
  const { content, variant, timestamp, attachment = undefined, sender } = props;
  const isSent = variant === "sent";
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isCelebrated, setIsCelebrated] = useState<boolean>(false);

  return (
    <div style={{ maxWidth: "60%", minWidth: "auto" }}>
      <div className="flex flex-row justify-between space-x-2 space-y-2 mb: 0.25 text-xs font-semibold text-slate-500">
        <p>{sender == "You" ? sender : sender.name}</p>
        <p>{timestamp}</p>
      </div>
      {attachment ? (
        <div className="px-2 py-1 rounded-lg bg-slate-200">
          <div className="flex flex-row space-x-1 space-y-1 items-center">
            <button>
              <InsertDriveFileRoundedIcon />
            </button>
            <div className="text-sm">
              <p>{attachment.fileName}</p>
              <p>{attachment.size}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`rounded-lg py-1 px-4 text-sm font-thin text-slate-800 ${
              isSent ? "bg-bubble" : "bg-white"
            }`}
          >
            <p>{content}</p>
          </div>
          {(isHovered || isLiked || isCelebrated) && (
            <div
              className={`flex flex-row absolute top-1/2 space-x-0.5 p-1.5 ${
                isSent ? "flex-end" : "flex-start"
              }`}
              style={{
                ...(isSent
                  ? { left: 0, transform: "translate(-100%, -50%)" }
                  : { right: 0, transform: "tranlsate(100%, -50%)" }),
              }}
            >
              <div
                color={isLiked ? "danger" : "neutral"}
                onClick={() => setIsLiked((prevState) => !prevState)}
              >
                {isLiked ? "❤️" : <FavoriteBorderIcon />}
              </div>
              <div
                color={isCelebrated ? "warning" : "neutral"}
                onClick={() => setIsCelebrated((prevState) => !prevState)}
              >
                {isCelebrated ? "🎉" : <CelebrationOutlinedIcon />}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
