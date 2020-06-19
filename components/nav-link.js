import styles from "./nav-link.module.css";

export default function NavLinksComponents({isOpen, isMobile, setIsOpen}) {
  return (
    <ul className={isOpen && isMobile? styles.openMainNav : styles.mainNav}>
      <li className={styles.mainNavLi} onClick={() => setIsOpen(false)}>
        <a className={styles.mainNavA} href="#quemsomos">
          Quem somos
        </a>
      </li>
      <li className={styles.mainNavLi} onClick={() => setIsOpen(false)}>
        <a className={styles.mainNavA} href="#servicos" >
          Serviços
        </a>
      </li>
      <li className={styles.mainNavLi} onClick={() => setIsOpen(false)}>
        <a className={styles.mainNavA} href="#localizacao">
          Localização
        </a>
      </li>
      <li className={styles.mainNavLi} onClick={() => setIsOpen(false)}>
        <a className={styles.mainNavA} href="#clientes">
          Clientes
        </a>
      </li>
      <li className={styles.mainNavLi} onClick={() => setIsOpen(false)}>
        <a className={styles.mainNavA} href="#contato">
          Contato
        </a>
      </li>
    </ul>
  );
}
