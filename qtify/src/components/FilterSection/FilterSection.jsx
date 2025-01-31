import React, { useEffect } from 'react'
import styles from "./FilterSection.module.css";
import Section from '../Section/Section';
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel';
import AlbumCard from '../AlbumCard/AlbumCard';
import { CircularProgress } from '@mui/material';

const FilterSection = ({type, title, value, filteredData, handleChangeIndex}) => {
console.log(type)
  return (
    <div className={styles.wrapper}>
       
            <div className={styles.heading}>
               <h3>{title}</h3> 
            </div>
            <BasicTabs handleChangeIndex={handleChangeIndex}/>
        {filteredData.length?(
                <div className={styles.cardsWrapper}>
                  {/* {console.log(filteredData)} */}
                    <Carousel data={filteredData} renderCardComponent={(filteredData)=><AlbumCard data={filteredData} type={type}/>}/>
                </div>
        ):(
            <div  className={styles.progressBar}>
                <CircularProgress/>
            </div>
        )}

    </div>
  )
}

export default FilterSection