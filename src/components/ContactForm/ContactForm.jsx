import { useState, useEffect, useRef } from "react";
import { useContactForm } from "./useContactForm";
import styles from "./ContactForm.module.css";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { formData, handleChange, handleSubmit, status, resetForm } = useContactForm();
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [closingModal, setClosingModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) setShowError(false);
  };

  const openModal = () => {
    setShowModal(true);
    setClosingModal(false);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setClosingModal(true);
        const closeTimer = setTimeout(() => setShowModal(false), 500);
        return () => clearTimeout(closeTimer);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setShowError(true);
      return;
    }

    try {
      await handleSubmit(e); // suponiendo que handleSubmit devuelve una promesa
      setSentMessage(true);
      resetForm?.(); // limpia el formulario si tu hook tiene resetForm
      setIsChecked(false);
      setShowError(false);

      // Oculta el mensaje después de 3 segundos
      setTimeout(() => setSentMessage(false), 3000);
    } catch (err) {
      console.error("Error enviando formulario:", err);
    }
  };

  return (
    <section id="contacto" className={styles.contactSection} ref={ref}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}>Contáctanos</motion.h2>
      <motion.svg viewBox="0 0 100 15" width="200" height="30" fill="#e53935" initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        <rect y="4" width="300" height="2"></rect>
      </motion.svg>
      <div className={styles.divider}></div>

      <div className={styles.container}>
        <motion.div className={styles.info} initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: 'easeOut' }}>
          <p>
            ¿Tienes dudas o necesitas asesoría? ¡No esperes más! Llena nuestro formulario de contacto y te ayudaremos a encontrar la mejor solución para ti.
          </p>
          <div className={styles.contactLinks}>
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
          </div>
        </motion.div>

        <motion.form className={styles.form} onSubmit={handleFormSubmit} initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
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

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="privacy"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={showError ? styles.checkboxError : ""}
            />
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

          {/* Mensaje de enviado */}
          {sentMessage && (
            <div className={styles.successMessage}>
              <FaCheckCircle style={{ marginRight: "5px" }} /> ¡Enviado!
            </div>
          )}
        </motion.form>
      </div>

      {showModal && (
        <div className={`${styles.modalOverlay} ${closingModal ? styles.closing : ""}`}>
          <div className={`${styles.modal} ${closingModal ? styles.modalClosing : ""}`}>
            <h3>Aviso de Privacidad</h3>
            <p>
              Tu privacidad es importante para nosotros. La información proporcionada en este formulario será utilizada únicamente para ponernos en contacto contigo. No compartimos tus datos con terceros sin tu consentimiento.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
