import { Box, Button, ButtonGroup, Divider } from "@mui/material"

type LinkBarProps = {
  links: {
    label: string
  }[]
};

export default function LinkBar({ links }: LinkBarProps) {
  return (
    <>
      <Box mt={2} mb={1} justifyContent="space-between" display="flex">
        <ButtonGroup variant="text" size="large">
          <Button>一覧に戻る</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" size="large">
          {links.map((link, id) => {
            return <Button key={id}>{link.label}</Button>
          })}
        </ButtonGroup>
      </Box>
      <Divider />
    </>
  );
}