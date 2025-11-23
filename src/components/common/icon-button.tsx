import type { PropsWithChildren } from "react";

type IconButtonProps = PropsWithChildren<{
  hrefLink: string;
}>;

const IconButton = ({ hrefLink, children }: IconButtonProps) => {
  return (
    <div className="bg-white dark:bg-[#171717] p-2 rounded-xl group">
      <a href={hrefLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
};

export default IconButton;
