import { Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";

type AppFrameProps = React.PropsWithChildren<{
  header?: ReactNode
  footer?: ReactNode
}>;

export default function AppFrame({ children, header, footer }: AppFrameProps) {
  return (
    <>
      {header || <Header />}
      <Container sx={{ overflowWrap: 'break-word' }}>
        {children}
      </Container>
      {footer}
    </>
  );
}