import { useState } from 'react';
import styles from './ServiceCard.module.css';

export const ServiceCard = ({ practice }) => {
    const [expanded, setExpanded] = useState(false);
    const { title, image, items } = practice;

    return (
      <div className={`${styles.serviceCard} ${expanded ? styles.expanded : ""}`} onClick={() => setExpanded(!expanded)}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
          <div className={styles.overlay}></div>
          <h3>{title}</h3>
        </div>
        <ul className={`${styles.serviceList} ${expanded ? styles.open : ""}`}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
};