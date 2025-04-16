import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  logo: React.ReactNode;
  isPassword?: boolean;
  placeholder?: string;
  value?: string;
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, logo, className, isPassword = false, value, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
  

    const isFilled = !!value;

    const inputType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : props.type;

    return (
      <div className={`mb-${isPassword ? '2' : '7'}`}>
        <Label htmlFor={id} className="mb-1">
          {label}
        </Label>
        <div className="relative">
          {logo && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {logo}
            </div>
          )}
          <Input
            ref={ref}
            id={id}
            type={inputType}
            className={`${className} pl-10 pr-${isPassword ? "10" : "3"}`}
            value={value}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={!isFilled}
              className={`absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground 
                ${!isFilled ? 'opacity-40 cursor-not-allowed' : 'hover:text-primary cursor-pointer'}`}
              tabIndex={-1}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default InputForm;
