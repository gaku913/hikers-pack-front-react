import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Button, { ButtonProps } from "../common/Button";

type FooterButtonProps = PropsWithChildren & ButtonProps;

export default function FooterButton({
  children,
  ...rest
}: FooterButtonProps) {
  return (
    <Footer>
      <Button
        variant="outlined"
        size="medium"
        {...rest}
      >
        {children}
      </Button>
    </Footer>
  )
}