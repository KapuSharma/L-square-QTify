import React, { useEffect, useState } from 'react';
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselRight.module.css";


const CarouselRight = () => {
  let swiper =useSwiper();
  const[isEnd, setIsEnd]=useState(swiper.isEnd);

  useEffect(()=>{
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd)
  })
  },[swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRight;