import React from "react";

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text = "Click Me",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-cyan-800 px-6 py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-cyan-600 hover:shadow-emerald-300 focus:ring-2 focus:ring-cyan-300 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 dark:from-blue-400 dark:to-cyan-300 dark:hover:shadow-emerald-900/40 dark:focus:ring-cyan-800 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
