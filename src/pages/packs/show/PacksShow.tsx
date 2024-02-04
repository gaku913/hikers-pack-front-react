import TabBar from "@/components/TabBar";
import TabSwiper from "@/components/TabSwiper";
import useTabSwiper from "@/lib/useTabSwiper";
import PackSummary from "./PackSummary";
import PackCheck from "./PackCheck";
import PackItems from "./PackItems";
import { ReactNode } from "react";

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
    label: "一覧",
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
    <>
      <TabBar
        value={value}
        tabItems={tabItems}
        handleChange={handleChange}
      />
      <TabSwiper
        value={value}
        tabItems={tabItems}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      />
    </>
  )
}