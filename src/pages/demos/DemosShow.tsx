import TabBar from "@/components/TabBar";
import TabSwiper from "@/components/TabSwiper";
import useTabSwiper from "@/hooks/useTabSwiper";
import { ReactNode } from "react";
import AppFrame from "@/components/frame/AppFrame";
import Header from "@/components/frame/Header";
import { useSearchParams } from "react-router-dom";
import DemoSumarry from "./DemoSummary";
import DemoItems from "./DemoItems";
import DemoCheck from "./DemoCheck";

export type tabItems = {
  label: string,
  contents: ReactNode,
}[]

const tabItems = [
  {
    label: "概要",
    contents: <DemoSumarry />,
  },
  {
    label: "持ち物",
    contents: <DemoItems />,
  },
  {
    label: "チェック",
    contents: <DemoCheck />,
  },
];

export default function DemosShow() {

  const [searchParams] = useSearchParams({ tab: "0" });
  const defaultTabValue = Number(searchParams.get("tab"));

  const {
    value, onSwiper, onSlideChange, handleChange
  } = useTabSwiper(defaultTabValue);


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
    >
      <TabSwiper
        value={value}
        tabItems={tabItems}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        initialSlide={defaultTabValue}
      />
    </AppFrame>
  )
}