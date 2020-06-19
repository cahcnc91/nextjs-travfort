import Head from "next/head";
import styles from './hero-section.module.css';
import MenuIcon from './icons/menu'

export default function HeroSection() {
  return (
    <Head>
      <header className={styles.header}>
        <nav>
          <div className="row">
            <img
              src="images/travfort-logowhite.png"
              alt="Travfort logo"
              className={styles.logo}
            />
            {/* <img
              src="img/travfort%20logoblack.png"
              alt="Travfort logo"
              className="logo-black"
            /> */}
            <ul className={styles.mainNav}>
              <li className={styles.mainNavLi}>
                <a className={styles.mainNavA} href="#quemsomos">Quem somos</a>
              </li>
              <li className={styles.mainNavLi}>
                <a className={styles.mainNavA} href="#servicos">Serviços</a>
              </li>
              <li className={styles.mainNavLi}>
                <a className={styles.mainNavA} href="#localizacao">Localização</a>
              </li>
              <li className={styles.mainNavLi}>
                <a className={styles.mainNavA} href="#clientes">Clientes</a>
              </li>
              <li className={styles.mainNavLi}>
                <a className={styles.mainNavA} href="#contato">Contato</a>
              </li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon">
              <MenuIcon></MenuIcon>
            </a>
          </div>
        </nav>
        <div className={styles.heroTextBox}>
          <h1>
            Sinta-se seguro.
            <br />
            Alarme e monitoramento para sua proteção.
          </h1>
          <a className="btn btn-full btn-header js--scroll-to-plans" href="#">
            Quero um orçamento gratuito
          </a>
          <a className="btn btn-ghost js--scroll-to-start" href="#">
            Monitoramento 24h
          </a>
        </div>
      </header>
    </Head>
  );
}
