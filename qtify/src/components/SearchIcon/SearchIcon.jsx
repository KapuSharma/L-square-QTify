import React from "react";
import searchImage from "../../assets/search.png"
import styles from "./SearchIcon.module.css"
const SearchIcon =()=>{
return <img src={searchImage} alt="logo" className={styles.icon}width={20} />
}
export default SearchIcon;