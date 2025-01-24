import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper.css'


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/images/Atomic+Habits.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\QS0XJ8WFGLYT4F61665222486.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\image-122.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\681-6814902_think-and-grow-rich.png' /></SwiperSlide>
        <SwiperSlide><img src='/images/Atomic+Habits.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\QS0XJ8WFGLYT4F61665222486.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\image-122.png' /></SwiperSlide>
        <SwiperSlide><img src='public\images\681-6814902_think-and-grow-rich.png' /></SwiperSlide>
      </Swiper>
    </>
  );
}
