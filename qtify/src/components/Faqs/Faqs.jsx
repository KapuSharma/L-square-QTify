import React from "react";
import styles from "./Faqs.module.css";
import Accordian from "../Accordian/Accordian";
import AccordionExpandIcon from "../Accordian/Accordian";
export default function Faqs() {
  return (
    <div className={styles.faqs}>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.accordian}>
        <AccordionExpandIcon
          heading="Is QTify free to use?"
          details="Yes! It is 100% free, and has 0% ads!"
        />
        <AccordionExpandIcon
          heading="Can I download and listen to songs offline?"
          details="Sorry, unfortunately we don't provide the service to download any songs."
        />
      </div>
    </div>
  );
}