import { SnackbarProps } from "@/components/common/Snackbar";
import { useState } from "react";

export default function useSnackbar() {
  const [snack, setSnack] = useState<SnackbarProps | undefined>();
  const setSuccesMsg = (message: string) => setSnack({
    severity: "success",
    message: message
  });
  const setErrorMsg = (message: string) => setSnack({
    severity: "error",
    message: message
  });
  const setInfoMsg = (message: string) => setSnack({
    severity: "info",
    message: message
  });
  const setWarningMsg = (message: string) => setSnack({
    severity: "warning",
    message: message
  });
  return {
    snack,
    setSnack,
    setSuccesMsg,
    setErrorMsg,
    setInfoMsg,
    setWarningMsg,
  };
}