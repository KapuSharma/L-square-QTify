import React, { useState, useEffect } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MusicPlayTracker = ({ pause = true }) => {
  const [progress, setProgress] = useState(0); // Progress in percentage
  const [currentTime, setCurrentTime] = useState(0); // Time in seconds
  const duration = 150; // Total duration in seconds (e.g., 2.5 minutes)
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    let timer;

    if (!pause) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          const nextTime = prev + 1;
          if (nextTime >= duration) {
            clearInterval(timer);
            return duration;
          }
          return nextTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [pause]); // Re-run effect whenever `pause` changes

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleProgressClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect(); 
    const clickX = event.clientX - rect.left; 
    const newProgress = (clickX / rect.width) * 100; 
    const newTime = Math.floor((newProgress / 100) * duration); 
    setCurrentTime(Math.min(newTime, duration)); 
  };
  const handleTouchMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const touchX = event.touches[0].clientX - rect.left; // Touch position
    const newProgress = Math.max(0, Math.min((touchX / rect.width) * 100, 100)); // Clamp progress between 0 and 100
    const newTime = Math.floor((newProgress / 100) * duration); // Convert progress to time
    setCurrentTime(newTime);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  return (
    <Box
      sx={{
        width: "60vw",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          width: "40vw", // Set to 40vw for screens smaller than 576px
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={handleProgressClick} 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "8px",
          borderRadius: "4px",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#34C94B",
          },
          backgroundColor: "#ffffff",
        }}
      />
      </Box>
    </Box>
  );
};

export default MusicPlayTracker;