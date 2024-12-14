import { useRef } from "react";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

export type MessageInputProps = {
  textAreaValue: string;
  setInputValue: (value: string) => void;
  onSubmit: () => void;
};
const MessageInput = (props: MessageInputProps) => {
  const { inputValue, setInputValue, onSubmit } = props;
  const inputRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      onSubmit();
      setInputValue("");
    }
  };
  return (
    <div className="flex flex-row gap-3 absolute justify-center items-center px-4 pb-3 bottom-0 left-0 right-0">
      <div className="grow">
        <input
          className="input"
          placeholder="Type something..."
          area-label="Message"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
        />
      </div>
      <button
        className="action-button rounded-full text-[0px] sm:text-sm sm:rounded-md space-2"
        style={{ alignSelf: "center" }}
        onClick={handleClick}
      >
        Отправить
        <SendRoundedIcon />
      </button>
    </div>
  );
};

export default MessageInput;
