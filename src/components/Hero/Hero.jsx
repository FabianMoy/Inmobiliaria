import styles from "./Hero.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

export const Hero = () => {


  return (
    <section id='inicio' className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.4, ease: "easeOut" }}  
        >
          ¿Problemas para pagar tu casa?
        </motion.h1>
        <motion.p
          className={styles.slogan}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          De la deuda a la tranquilidad, nosotros te ayudamos
        </motion.p>
        <motion.div
          className={styles.contactLinks}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <a
            href="https://wa.link/32n8w4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
            aria-label="Agenda tu consulta por WhatsApp"
          >
            Agenda tu consulta
          </a>
          <FaWhatsapp className={styles.whatsappIcon} />
        </motion.div>
      </div>
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(/hero-bg.jpg)` }}
      ></div>
    </section>
  );
};