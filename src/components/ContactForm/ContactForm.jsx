import {useContactForm} from "./useContactForm";
import styles from "./ContactForm.module.css";
import { WhatsappIcon } from "./WhatsappIcon";

export const ContactForm = () => {
    const { formData, handleChange, handleSubmit, status } = useContactForm();
  
    return (
      <section id="contacto" className={styles.contactSection}>
        <h2 className={styles.heading}>CONTACTO</h2>
        <svg viewBox="0 0 100 15" width="200" height="30" fill="yellow">
          <rect y="4" width="300" height="2"></rect>
        </svg>
        <div className={styles.divider}></div>
  
        <div className={styles.container}>
          {/* Información a la izquierda */}
          <div className={styles.info}>
            <p>Apodaca, Nuevo León, México</p>
            <p className={styles.contactWrapper}>
              <a href="https://wa.link/32n8w4" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon /> 
                <span className={styles.highlight}>+52 81 2426 9166</span>
              </a> 
            </p>
            <p className={styles.emailContact}>  
                <a 
                href="mailto:Danielvargasalejandro1@gmail.com" 
                className={styles.highlight}>
                    Danielvargasalejandro1@gmail.com
                </a>
            </p>
          </div>
  
          {/* Formulario a la derecha */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Dirección de correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.button} disabled={status === "loading"}>
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>
            {status === "success" && <p className={styles.success}>¡Mensaje enviado con éxito!</p>}
            {status === "error" && <p className={styles.error}>Error al enviar el mensaje. Inténtalo de nuevo.</p>}
          </form>
        </div>
      </section>
    );
  };