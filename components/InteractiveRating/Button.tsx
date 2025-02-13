"use client";

interface IProps {
  label: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ label, isActive = false, className = "", onClick }) => {
  return (
    <button
      className={`p-4 rounded-full h-12 w-12 bg-neutral-light-grey bg-opacity-10 hover:bg-white text-white text-opacity-70 hover:text-neutral-very-dark-blue ${className} ${
        isActive ? "!bg-primary-orange bg-opacity-100 !text-neutral-very-dark-blue font-bold" : ""
      }`}
      onClick={onClick}
    >
      <span className="m-auto">{label}</span>
    </button>
  );
};

export default Button;
