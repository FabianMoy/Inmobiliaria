import styles from "./About.module.css";


export const About = () => {
  return (
    <section id="nosotros" className={styles.aboutSection}>
      <div className={styles.aboutText}>
        
        {/* Contenedor del título alineado a la izquierda */}
        <div className={styles.aboutHeadingContainer}>
          <h2 className={styles.aboutHeading}>Acerca de</h2>
          <svg viewBox="0 0 100 24" width="200" height="30" fill="yellow">
            <rect y="4" width="300" height="2"></rect>
          </svg>
        </div>

        {/* Contenedor de texto + imagen */}
        <div className={styles.aboutContent}>
          <div className={styles.textContainer}>
            <p>
              El Licenciado <strong>Daniel Alejandro Vargas Vargas</strong> es egresado de la <strong>Universidad Metropolitana de Monterrey</strong> y cuenta con amplia experiencia en diversas ramas del derecho, brindando asesoría y representación legal con un enfoque integral y basado en el cumplimiento de la ley.
            </p>
            <p>
              Su ejercicio profesional abarca asuntos de índole <strong>civil, mercantil, laboral, fiscal, familiar y penal</strong>, ofreciendo soluciones estratégicas que permiten atender cada caso de manera eficiente y con apego a los principios jurídicos.
            </p>
            <p>
              Comprometido con la transparencia y la ética profesional, su labor se centra en proporcionar a cada cliente un servicio confiable, orientado a la obtención de resultados dentro de los tiempos y procedimientos establecidos.
            </p>
          </div>

          {/* Imagen */}
          <div className={styles.imageContainer}>
            <img src='/about.jpg' alt="about image" />
          </div>
        </div>

        {/* Sección de contacto */}
        <div className={styles.contactText}>
          <h3>¿Necesitas asesoría legal inmediata o buscas prevenir futuros problemas?</h3>
          <p>Llámanos o escríbenos para agendar una cita.</p>
          <div>
            <span>Teléfono de oficina y <b></b>
              <span className={styles.contactButton}>
                WhatsApp: +52 (81) 2426 9166
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
