import { useState } from "react";
import { useContactForm } from "./useContactForm";
import styles from "./ContactForm.module.css";
import { WhatsappIcon } from "./WhatsappIcon";

export const ContactForm = () => {
  const { formData, handleChange, handleSubmit, status } = useContactForm();
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [closingModal, setClosingModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setShowError(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setClosingModal(false); // Resetear animación
    setTimeout(() => {
      setClosingModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 500); // Duración de la animación de cierre
    }, 5000); // Cierra después de 10 segundos
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setShowError(true);
      return;
    }
    handleSubmit(e);
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <h2 className={styles.heading}>CONTACTO</h2>
      <svg viewBox="0 0 100 15" width="200" height="30" fill="yellow">
        <rect y="4" width="300" height="2"></rect>
      </svg>
      <div className={styles.divider}></div>

      <div className={styles.container}>
              {/* Información de contacto */}
      <div className={styles.info}>
          <p>Apodaca, Nuevo León, México</p>
          <p className={styles.contactWrapper}>
            <a href="https://wa.link/32n8w4" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
              <span className={styles.highlight}>+52 81 2426 9166</span>
            </a>
          </p>
          <p className={styles.emailContact}>
            <a href="mailto:Danielvargasalejandro1@gmail.com" className={styles.highlight}>
              Danielvargasalejandro1@gmail.com
            </a>
          </p>
        </div>

        {/* Formulario */}
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="privacy" checked={isChecked} onChange={handleCheckboxChange} className={showError ? styles.checkboxError : ""} />
            <label htmlFor="privacy">
              Acepto el{" "}
              <span className={styles.privacyLink} onClick={openModal}>
                Aviso de privacidad
              </span>
            </label>
          </div>
          {showError && <p className={styles.errorText}>Debes aceptar el aviso de privacidad</p>}

          <button type="submit" className={styles.button} disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>

      {/* Modal con animación */}
      {showModal && (
        <div className={`${styles.modalOverlay} ${closingModal ? styles.closing : ""}`}>
          <div className={`${styles.modal} ${closingModal ? styles.modalClosing : ""}`}>
            <h3>Aviso de Privacidad</h3>
            <p>Tu privacidad es importante para nosotros. La información proporcionada en este formulario será utilizada únicamente para ponernos en contacto contigo. No compartimos tus datos con terceros sin tu consentimiento.</p>
          </div>
        </div>
      )}
    </section>
  );
};
