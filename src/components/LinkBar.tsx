import { Box, Button, ButtonGroup, Divider } from "@mui/material"

type LinkBarProps = {
  links: {
    label: string
  }[]
};

export default function LinkBar({ links }: LinkBarProps) {
  return (
    <>
      <Divider />
      <Box mt={1} textAlign="center">
        <ButtonGroup variant="text">
          {links.map((link, id) => {
            return <Button key={id}>{link.label}</Button>
          })}
        </ButtonGroup>
      </Box>
    </>
  );
}