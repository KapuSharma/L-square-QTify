import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel"

const Section = ({ type, title, data, toggle = true }) => {
  const [carouselToggle, setCarouselToggle] = useState(false); // Initially show first 7 cards

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
// console.log(type)
  return (
    <div>
      <div className={styles.sectionTop}>
        <h3>{title}</h3>
        {toggle && (
          <h4 onClick={handleToggle} className={styles.toggleText}>
            {carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>

      {data.length ? (
        <div className={styles.sectionInnerWrapper}>
          {carouselToggle ? (
            <div className={styles.showAllWrapper}>
              {data.map((album) => {
                // console.log(album)
                return( 
                <AlbumCard data={album} type={type} key={album.id} />
              )})}
            </div>
          ) : (
            <div className={styles.cardsWraper}>
           <Carousel data={data} renderCardComponent={(data)=><AlbumCard data={data} type={type}/>}/>
              {/* {data.slice(0, 7).map((album) => (
                 <AlbumCard data={album} type={type} key={album.id} />
              ))} */}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.progressBar}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Section;