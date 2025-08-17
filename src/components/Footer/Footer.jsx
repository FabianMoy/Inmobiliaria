import styles from "./Footer.module.css";
// import { EmailIcon } from "./EmailIcon"; // Asegúrate de tener este icono
import { WhatsappIcon } from "../ContactForm/WhatsappIcon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Sección izquierda con logo y texto */}
      <div className={styles.left}>
        <img src="./logo2.png" alt="Logo de la empresa" className={styles.logo} />
        <div className={styles.text}>
          <p>Vargas Inmobiliaria Real State</p>
          <p>Copyright © 2025 Todos los derechos reservados</p>
        </div>
      </div>

    </footer>
  );
};