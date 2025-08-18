import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import styles from './About.module.css'; // Ajusta la ruta de tu CSS

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 
  
  useEffect(() => {
  console.log('Está en vista:', isInView);
}, [isInView]);

  return (
    <section id="nosotros" className={styles.aboutSection} ref={ref}>
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="/about1.jpg"
            alt="Piscina"
            className={styles.mainImage}
          />
        </motion.div>

        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className={styles.aboutHeading}>Sobre nosotros</h2>
          <svg viewBox="0 10 300 24" width="200" height="30" fill="#f50100">
            <rect y="0" width="300" height="2"></rect>
          </svg>
          <p><strong>Si estás atravesando una situación difícil con tu propiedad, podemos ayudarte.</strong></p>
          <p> Nuestro objetivo es ofrecerte una salida sencilla, legal y sin complicaciones. Compramos casas con deudas, en traspaso o con problemas, y te explicamos todo de forma clara y sin rodeos. </p>
          <p> <strong>Contamos con un equipo de profesionales expertos en temas legales, financieros y notariales, lo que nos permite actuar con transparencia en cada paso del proceso.</strong> </p>
          <p> Te brindamos opciones reales y un trato justo, porque entendemos lo importante que es tu tranquilidad y tu patrimonio. </p>
        </motion.div>
      </div>
    </section>
  );
};