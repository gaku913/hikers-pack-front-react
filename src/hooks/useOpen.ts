import { useState } from "react";

export function useOpen(init: boolean) {
  const [open, setOpen] = useState(init);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);
  return { open, handleOpen, handleClose, handleToggle };
}