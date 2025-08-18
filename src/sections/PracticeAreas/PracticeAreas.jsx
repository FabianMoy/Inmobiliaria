import styles from './PracticeAreas.module.css'
import { ServiceCard } from './ServiceCard/ServiceCard'
import { legalPractices } from './Helpers/legalPractices'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  return (
    <section 
      id='servicios' 
      className={styles.PracticeAreasSection}
      ref={ref}
    >
      <motion.h3 
        className={styles.servicesTitle}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
      >
        Nuestros servicios
      </motion.h3>

      <motion.div
        className={styles.cardsContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {legalPractices.map((practice, index) => (
          <ServiceCard key={index} practice={practice} />
        ))}
      </motion.div>
    </section>
  )
}