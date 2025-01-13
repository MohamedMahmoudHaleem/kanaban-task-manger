import { forwardRef } from "react";

const TextInput = forwardRef(
  ({ label, type = "text", className, ...props }, ref) => {
    return (
      <div className={className}>
        <label
          htmlFor={props?.name}
          className="block mb-2 text-sm  rounded-sm  text-neutral-light-ContentText font-semibold"
        >
          {label}
        </label>
        <input
          type={type}
          {...props}
          ref={ref}
          className="border-2 border-neutral-light-darkGrayishBlue w-full rounded-md p-2 outline-none opacity-70"
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
