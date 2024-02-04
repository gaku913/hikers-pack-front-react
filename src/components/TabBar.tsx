import { tabItems } from "@/pages/packs/show/PacksShow";
import { Tab, Tabs, Toolbar } from "@mui/material";


function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type TabBarProps = {
  value: number
  tabItems: tabItems
  handleChange: (
    (event: React.SyntheticEvent<Element, Event>, newValue: number) => void
  )
};

export default function TabBar({ tabItems, value, handleChange }: TabBarProps) {
  return (
    <Toolbar
      variant="dense"
      sx={{ justifyContent: "center" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
      >
        {tabItems.map((tabItem, id) => {
          return (
            <Tab key={id} label={tabItem.label} {...a11yProps(id)} />
          );
        })}
      </Tabs>
    </Toolbar>
  );
}