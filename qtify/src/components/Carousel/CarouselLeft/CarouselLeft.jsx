import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg"
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";


const CarouselLeft = () => {
  let swiper =useSwiper();
  const[isBeginning, setIsBeginning]=useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning)
  })
  },[swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeft
