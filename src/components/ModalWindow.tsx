import { Modal } from "@mui/material";
import { PropsWithChildren } from "react";

type ModalWindowProps = PropsWithChildren<{
  open?: boolean
  onClose?: () => void
}>;

export default function ModalWindow(
  { children, open, onClose }: ModalWindowProps) {
  return (
    <Modal
      open={open || false}
      onClose={onClose}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%"
        }}
      >
        {children}
      </div>
    </Modal>
  );
}