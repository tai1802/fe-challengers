import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IProps {
  isExpand?: boolean;
  title?: string;
  content?: string;
  className?: string;
  handleChange?: (value: boolean) => void;
}

const Accordion: React.FC<IProps> = ({ className = "", isExpand = false, title = "", content = "", handleChange }) => {
  return (
    <div className={twMerge("w-full flex flex-col gap-3 my-4 transition-all duration-500 transform select-none", className)}>
      <button
        className="flex flex-row justify-between gap-2 w-full hover:text-purple-600"
        onClick={() => (handleChange ? handleChange(!isExpand) : undefined)}
      >
        <p className="font-bold text-base text-left">{title}</p>
        <Image
          src={isExpand ? "/icon-minus.svg" : "/icon-plus.svg"}
          alt=""
          width={24}
          height={24}
          className="my-auto"
        />
      </button>
      <p
        className={twMerge(
          "text-sm transition-all duration-200 ease-in-out transform translate-y-[-10px] opacity-0",
          isExpand ? "max-h-[unset] opacity-100 translate-y-0" : "max-h-0 hidden opacity-0 translate-y-[-10px]"
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;
