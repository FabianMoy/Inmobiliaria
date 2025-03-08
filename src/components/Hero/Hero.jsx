import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5); // Ajusta la velocidad del parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id='inicio' className={styles.hero}>
    {/* Imagen de fondo con efecto Parallax */}
    <div 
      className={styles.heroBackground} 
      style={{ 
        transform: `translateY(${offsetY}px)`, 
        backgroundImage: `url(/hero-bg.jpg)` // Usamos la imagen importada
      }}
    ></div>

    <div className={styles.heroContent}>
      <h1 className={styles.title}>Licenciado Daniel Alejandro Vargas Vargas</h1>
      <p className={styles.slogan}>
        Resolviendo tu presente, protegiendo tu futuro.
      </p>
    </div>
  </section>
  );
};