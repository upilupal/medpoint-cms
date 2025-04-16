import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Variant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "default",
  size = "default",
  disabled = false,
  icon,
  style,
  isLoading = false,
  ...rest
}) => {
  return (
    <ShadButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      style={style}
      {...rest}
    >
      {label}
      {isLoading ? (
        <Loader2 className="animate-spin mr-2 h-4 w-4" />
      ) : (
        icon && <span className="ml-2">{icon}</span>
      )}
    </ShadButton>
  );
};

export default Button;
