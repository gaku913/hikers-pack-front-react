import AppFrame from "@/components/AppFrame";
import { Paper } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
  const url = new URL(window.location.href);

  return (
    <AppFrame>
      <h1>QR Code</h1>
      <p>{url.origin}</p>
      <Paper
        variant="outlined"
        sx={{
          m: 2,
          py: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <QRCodeSVG value={url.origin}/>
      </Paper>
    </AppFrame>
  );
}