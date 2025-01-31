import React, { useState } from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Image from "../../assets/Hero.png";
import styles from "./Footer.module.css";
import MusicPlayTracker from "../MusicPlayTracker/MusicPlayTracker";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={styles.footerWraper}>
      <div className={styles.imageCard}>
        <div className={styles.img}>
          <img src={Image} alt="image for song playing" />
        </div>
        <div className={styles.details}>
          <h5>Song Name</h5>
          <p>Album Name</p>
        </div>
      </div>
      <div >
        <div className={styles.playMusic}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%", // Ensures the button is circular
              width: "30px", // Set a fixed width
              height: "30px", // Set the same height to match width
              minWidth: "unset", // Prevents Material-UI's default button width
              display: "flex", // Centers the content
              justifyContent: "center",
              alignItems: "center",
              padding: 0, // Removes additional padding for smaller size
            }}
            onClick={handleToggle}
          >
            {isPlaying ? (
              <PauseIcon sx={{ fontSize: "16px", color: "black" }} />
            ) : (
              <PlayArrowIcon sx={{ fontSize: "16px", color: "black" }} />
            )}
          </Button>
        </div>
        <MusicPlayTracker pause={isPlaying?true:false}/>
      </div>
    </div>
  );
}