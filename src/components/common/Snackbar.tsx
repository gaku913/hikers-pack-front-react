import { Alert, IconButton, Snackbar as MuiSnackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export type SnackbarProps = {
  severity: "error" | "info" | "success" | "warning"
  message: string
}

export default function Snackbar({
  message,
  severity,
}: SnackbarProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false)

  const action = (
    <IconButton
      size="small"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <MuiSnackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          severity={severity}
          onClose={handleClose}
          variant="outlined"
          sx={{ width: 1, bgcolor: "background.paper" }}
        >
          {message}
        </Alert>
      </MuiSnackbar>
    </>
  )
}