import React from "react";
import clsx from "clsx";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  onClick,
}) => {
  const sizeStyles = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors",
        sizeStyles[size],
        shape,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
