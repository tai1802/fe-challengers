import { Fragment } from "react";

interface IProps {
  title?: string;
  subtitle?: string;
  items?: { key: string; value: string }[];
}

const NutritionTable: React.FC<IProps> = ({ title, subtitle, items = [] }) => {
  return (
    <Fragment>
      <div className="space-y-5">
        <p className="text-brown-800 text-2xl">{title}</p>
        <p>{subtitle}</p>
        <table className="w-full">
          <tbody>
            {items?.map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-2 font-normal">{item?.key}</td>
                <td className="text-brown-800 py-2">{item?.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default NutritionTable;
