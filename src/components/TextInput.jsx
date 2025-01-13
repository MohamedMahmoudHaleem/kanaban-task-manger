import { forwardRef } from "react";

const TextInput = forwardRef(({ label, type = "text", ...props }, ref) => {
  return (
    <>
      <label htmlFor={props?.name}>{label}</label>
      <input type={type} {...props} ref={ref} />
    </>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
