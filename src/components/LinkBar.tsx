import { Box, ButtonGroup, Divider, Paper } from "@mui/material"
import Button, { ButtonProps } from "./common/Button";

type LinkBarProps = {
  leftButtons?: ButtonProps[]
  rightButtons?: ButtonProps[]
};

export default function LinkBar({ leftButtons, rightButtons }: LinkBarProps) {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        mt: 1,
        top: 0,
        position: "sticky",
      }}
    >
      <Box
        pt={1}
        pb={1}
        justifyContent="space-between"
        display="flex"
      >
        <ButtonGroup>
          {leftButtons?.map((btnProps, id) => {
            return <Button key={id} {...btnProps} />
          })}
        </ButtonGroup>
        <ButtonGroup>
          {rightButtons?.map((btnProps, id) => {
            return <Button key={id} {...btnProps} />
          })}
        </ButtonGroup>
      </Box>
      <Divider />
    </Paper>
  );
}