import styles from "./hero-section.module.css";
import MenuIcon from "./icons/menu";
import NavLinksComponents from "./nav-link";
import { useState } from "react";
import useResize from "./hooks/useResize";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useResize();
  const isMobile = width < 768;

  return (
    <header className={styles.header}>
      <nav>
        <div className="row relative">
          <img
            src="images/travfort-logowhite.png"
            alt="Travfort logo"
            className={styles.logo}
          />

          <a
            className={styles.mobileNavIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon></MenuIcon>
          </a>

          <NavLinksComponents isOpen={isOpen} isMobile={isMobile} setIsOpen={setIsOpen}></NavLinksComponents>
        </div>
      </nav>
      <div className={styles.heroTextBox}>
        <h1>
          Sinta-se seguro.
          <br />
          Alarme e monitoramento para sua proteção.
        </h1>
        <a className="btn btn-full btn-header js--scroll-to-plans" href="#contato">
          Quero um orçamento gratuito
        </a>
        <a className="btn btn-ghost js--scroll-to-start" href="#servicos">
          Monitoramento 24h
        </a>
      </div>
    </header>
  );
}
