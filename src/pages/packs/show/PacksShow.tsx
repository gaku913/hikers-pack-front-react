import TabBar from "@/components/TabBar";
import TabSwiper from "@/components/TabSwiper";
import useTabSwiper from "@/hooks/useTabSwiper";
import PackSummary from "./PackSummary";
import PackCheck from "./PackCheck";
import PackItems from "./PackItems";
import { ReactNode } from "react";
import AppFrame from "@/components/frame/AppFrame";
import Header from "@/components/frame/Header";
import Footer from "@/components/frame/Footer";
import { Button } from "@mui/material";

export type tabItems = {
  label: string,
  contents: ReactNode,
}[]

const tabItems = [
  {
    label: "概要",
    contents: <PackSummary />,
  },
  {
    label: "持ち物",
    contents: <PackItems />,
  },
  {
    label: "チェック",
    contents: <PackCheck />,
  },
];

export default function PacksShow() {
  const {value, onSwiper, onSlideChange, handleChange} = useTabSwiper();

  return (
    <AppFrame
      header={
        <Header>
          <TabBar
            value={value}
            tabItems={tabItems}
            handleChange={handleChange}
          />
        </Header>
      }
      footer={
        value === 1 && // 持ち物タブで表示
        <Footer>
          <Button
            variant="outlined"
            size="medium"
          >
            新しい持ち物を追加する
          </Button>
        </Footer>
      }
    >
      <TabSwiper
        value={value}
        tabItems={tabItems}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      />
    </AppFrame>
  )
}