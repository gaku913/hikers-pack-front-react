import type { Swiper as SwiperCore } from 'swiper';
import { useState } from 'react';

export default function useTabSwiper() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [value, setValue] = useState<number>(0);

  const onSwiper = (currentSwiper: SwiperCore) => {
    const swiperInstance = currentSwiper;
    setSwiper(swiperInstance);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };

  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  return {value, onSwiper, onSlideChange, handleChange};
}