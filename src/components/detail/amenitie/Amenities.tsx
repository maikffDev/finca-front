import React from "react";
import styles from "./Amenities.module.css";

interface Props {
  items: string[];
}

export const Amenitis = ({ items }: Props) => (
  <div className={styles.tagsContainer}>
    {items.map((a, i) => (
      <span key={i} className={styles.tag}>
        {a}
      </span>
    ))}
  </div>
);
