type AvatarWithStatusProps = {
  online?: boolean;
  src: string;
};

const AvatarWithStatus = (props: AvatarWithStatusProps) => {
  const { online = false, ...other } = props;
  return (
    <div>
      <div
        className="flex flex-col w-8 h-8 items-center justify-center bg-slate-200 rounded-full"
        color={online ? "success" : "neutral"}
      >
        <img {...other} />
      </div>
    </div>
  );
};

export default AvatarWithStatus;
