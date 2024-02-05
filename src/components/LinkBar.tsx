import { Box, Button, ButtonGroup, Divider, Paper } from "@mui/material"

type LinkBarProps = {
  links: {
    label: string
  }[]
};

export default function LinkBar({ links }: LinkBarProps) {
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
    </Paper>
  );
}