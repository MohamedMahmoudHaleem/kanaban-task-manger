import { useState } from "react";

export function useToggle(initialValue = true) {
  const [isOpen, setIsOpen] = useState(initialValue);
  function handleToggle() {
    setIsOpen((open) => !open);
  }
  return [isOpen, handleToggle, setIsOpen];
}
