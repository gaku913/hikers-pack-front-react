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
      <Box mt={1} textAlign="right">
        <ButtonGroup variant="text" size="small">
          {links.map((link, id) => {
            return <Button key={id}>{link.label}</Button>
          })}
        </ButtonGroup>
      </Box>
    </>
  );
}