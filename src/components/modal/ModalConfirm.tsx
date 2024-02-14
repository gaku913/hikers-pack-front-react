import { Box, Divider } from "@mui/material";
import ModalWindow from "./ModalWindow";
import FormButtonBar, { FormButtonBarProps } from "../form/FormButtonBar";
import { PropsWithChildren } from "react";

/** 確認用のモーダル画面 */
type ModalConfirmProps = (
  PropsWithChildren &
  FormButtonBarProps &
  {
    open: boolean
  }
);

export default function ModalConfirm({
  children,
  open,
  ...rest
}: ModalConfirmProps) {
  return (
    <ModalWindow open={open}>
      <Box sx={{ p: 2 }}>
        {children}
      </Box>
      <Divider />
      <FormButtonBar {...rest} />
    </ModalWindow>
  )
}