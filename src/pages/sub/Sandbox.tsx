import axios from "axios";
import { useQuery } from "react-query";
import type { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const fetchData = async () => {
	const { data } = await axios.get("hello");
  return data;
};

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
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function Sandbox() {
  const { data, isLoading, isError } = useQuery("hello", fetchData);

  let result;
  if (isLoading) {
    result = "Loading ..."
  }
  else if (isError) {
    result = "Error"
  }
  else {
    result = JSON.stringify(data)
  }


  // Swiper
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };
  const onSwiper = (currentSwiper: SwiperCore) => {
    const swiperInstance = currentSwiper;
    setSwiper(swiperInstance);
  };
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  return (
    <>
    <h2>API Connection</h2>
    <p>
      Base URL: {import.meta.env.VITE_API_BASE_URL}
    </p>
    <p>{result}</p>

    <h2>Swiper</h2>
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      <Tab label="Item One" {...a11yProps(0)} />
      <Tab label="Item Two" {...a11yProps(1)} />
      <Tab label="Item Three" {...a11yProps(2)} />
    </Tabs>
    <Swiper
        simulateTouch={false}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </SwiperSlide>
      </Swiper>
    </>
  )
}