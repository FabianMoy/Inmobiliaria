import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Detectar click fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} ref={navRef}>
        
        <div className={styles.logo}>
          <img src={'/logo.png'} alt="Logo del abogado" />
        </div>
        <button 
          className={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg 
            className={styles.hamburgerIcon} 
            viewBox="0 0 24 24" 
            width="30" 
            height="35" 
            fill="black"
          >
            <rect y="0" width="24" height="5"></rect>
            <rect y="10" width="24" height="5"></rect>
            <rect y="20" width="24" height="5"></rect>
          </svg>
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
