import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function AccordionExpandIcon({heading,details}) {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "#121212",
          color: "white",
          border: "1px solid #ffffff",
          margin:"10px",
          width:"70vw"
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon sx={{color:"#34C94B"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{borderRadius:"10px"}}
        >
          <Typography component="span">{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"#ffffff", color:"black"}}>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}