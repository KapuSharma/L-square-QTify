import React, { useEffect } from 'react';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselRight/CarouselRight";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper/modules';


const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        swiper.slideTo(0,1)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (

    <div className={styles.wrapper}>
    <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
         modules={[Navigation]}
         allowTouchMove
        //  allowTouchMove
        >
        <Controls data={data}/>
         <CarouselLeft />
         <CarouselRight />
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
      ))}
       
    </Swiper>
    </div>
  )
}

export default Carousel;
