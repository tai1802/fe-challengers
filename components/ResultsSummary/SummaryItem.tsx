import Image from "next/image";

type Color = "light-red" | "orangey-yellow" | "green-teal" | "cobalt-blue";

interface IProps {
  iconPath: string;
  name: string;
  score: number;
  color?: Color;
  className?: string;
}

const SummaryItem: React.FC<IProps> = ({ className = "", iconPath, name, score, color = "light-red" }) => {
  let bgClass = "";
  let textClass = "";
  switch (color) {
    case "light-red":
      bgClass = "bg-primary-light-red";
      textClass = "text-primary-light-red";
      break;
    case "orangey-yellow":
      bgClass = "bg-primary-orangey-yellow";
      textClass = "text-primary-orangey-yellow";
      break;
    case "green-teal":
      bgClass = "bg-primary-green-teal";
      textClass = "text-primary-green-teal";
      break;
    case "cobalt-blue":
      bgClass = "bg-primary-cobalt-blue";
      textClass = "text-primary-cobalt-blue";
      break;
    default:
      bgClass = "bg-primary-light-red";
      textClass = "text-primary-light-red";
      break;
  }

  return (
    <div className={`flex justify-between p-3 rounded-xl bg-opacity-10 ${bgClass} ${className}`}>
      <div className={`flex gap-3 ${textClass}`}>
        <Image src={iconPath} alt={name} width={18} height={18} />
        <p>Reaction</p>
      </div>
      <div className="space-x-2">
        <span className="text-neutral-dark-gray-blue font-bold">{score}</span>
        <span className="text-neutral-dark-gray-blue text-opacity-45 font-bold">/ 100</span>
      </div>
    </div>
  );
};

export default SummaryItem;
