import TabBar from "@/components/TabBar";
import TabSwiper from "@/components/TabSwiper";
import useTabSwiper from "@/lib/useTabSwiper";
import PackSummary from "./PackSummary";
import PackCheck from "./PackCheck";
import PackItems from "./PackItems";
import { ReactNode } from "react";
import AppFrame from "@/components/AppFrame";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@mui/material";
import LinkBar from "@/components/LinkBar";

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
      { value === 0 && // 概要タブで表示
        <LinkBar
          links={[
            {
              label: "編集"
            },
            {
              label: "削除"
            },
          ]}
        />
      }
      <TabSwiper
        value={value}
        tabItems={tabItems}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      />
    </AppFrame>
  )
}