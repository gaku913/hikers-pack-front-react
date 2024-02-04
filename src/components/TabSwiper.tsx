import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import { tabItems } from "@/pages/packs/show/PacksShow";

type TabPanelProps = React.PropsWithChildren<{
  index: number;
  value: number;
}>;

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ minHeight: "100vh" }}
    >
      {value === index && (<>{children}</>)}
    </div>
  );
}

type TabSwiperProps = {
  value: number
  tabItems: tabItems
  onSwiper: (currentSwiper: SwiperCore) => void
  onSlideChange: (currentSwiper: SwiperCore) => void
};

export default function TabSwiper(
  { onSwiper, onSlideChange, value, tabItems }: TabSwiperProps) {
  return (
    <>
    <Swiper
      simulateTouch={false}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
    >
      {tabItems.map((tabItem, id) => {
        return (
          <SwiperSlide key={id}>
            <TabPanel value={value} index={id}>
              {tabItem.contents}
            </TabPanel>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </>
  );
}