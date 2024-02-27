import AppFrame from "@/components/frame/AppFrame";
import { Box } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
  const url = new URL(window.location.href);

  return (
    <AppFrame>
      <h1>QR Code</h1>
      <p>このアプリへのリンクを生成します。</p>
      <p>{url.origin}</p>
      <Box
        sx={{
          m: 2,
          py: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <QRCodeSVG value={url.origin}/>
      </Box>
    </AppFrame>
  );
}