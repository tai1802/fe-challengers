import Link from "next/link";

interface IProps {
  label?: string;
  url?: string;
}

const ButtonLink: React.FC<IProps> = ({ label = "", url = "/" }) => {
  return (
    <Link
      href={url}
      className="w-full bg-grey-700 py-3 text-center rounded-lg hover:bg-green-default hover:text-grey-800"
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
