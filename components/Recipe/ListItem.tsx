import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  title?: string;
  type?: "disc" | "decimal";
  items?: string[];
}

const ListItem: React.FC<IProps> = ({ title, type = "disc", items = [] }) => {
  return (
    <Fragment>
      <div className="space-y-3">
        <p className="text-brown-800 text-2xl">{title}</p>
        <ul className={twMerge("text-stone-600 ml-6 space-y-2", type === "disc" ? "list-disc " : "list-decimal")}>
          {items?.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      </div>
      <div className="w-full border border-neutral-200"></div>
    </Fragment>
  );
};

export default ListItem;
