import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
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

type TabSwiperProps = SwiperProps & {
  value: number
  tabItems: tabItems
};

export default function TabSwiper(
  { value, tabItems, ...rest }: TabSwiperProps) {
  return (
    <>
    <Swiper
      simulateTouch={false}
      style={{ overflow: "clip" }}
      {...rest}
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