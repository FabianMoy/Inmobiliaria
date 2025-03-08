import { useState } from 'react'
import styles from './Header.module.css'
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className={styles.header}>
      <nav className={styles.navbar}>
      
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
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#practica">Áreas de Práctica</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><SocialMedia/></li>
        </ul>
      </nav>
    </header>
  )
}
