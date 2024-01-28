import { Paper, styled } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

const Contents = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

export default function QRCode() {
  const url = new URL(window.location.href);

  return (
    <>
    <h1>QR Code</h1>
    <p>{url.origin}</p>
    <Contents>
      <QRCodeSVG value={url.origin}/>
    </Contents>
    </>
  )
}