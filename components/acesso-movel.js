import styles from './acesso-movel.module.css'

export default function AcessoMovelSection() {
  return (
    <section className="section-steps js-steps">
      <div className="row">
        <h2>Acesso de qualquer lugar</h2>
      </div>
      <div className={styles.wrapper}>
        <div className="steps-box">
          <img
            src="images/security-camera-mobile-app-view.png"
            alt="Acesso de cameras via celular"
            className={styles.appScreen}
          />
        </div>
        <div className="steps-box">
          <div className="works-step clearfix">
            <div>1</div>
            <p>Acesso à câmeras em qualquer lugar, pelo celular ou laptop.</p>
          </div>
          <div className="works-step clearfix">
            <div>2</div>
            <p>
              Acesso à seu alarme, arme e desarme tambem pode ser feito pelo
              celular.
            </p>
          </div>
          <div className="works-step clearfix">
            <div>3</div>
            <p>
              Acesso à portão de garagem eletrônico, abertura e fechamento,
              tambem a lâmpadas do local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
