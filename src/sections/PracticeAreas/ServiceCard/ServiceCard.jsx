import styles from './ServiceCard.module.css';

export const ServiceCard = ({ practice }) => {
  const { title, image, description } = practice

  return (
    <div className={styles.serviceCard}>

      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};