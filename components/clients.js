export default function Clientes() {
  return (
    <section className="section-testimonials">
      <div className="row">
        <h2>Nossos clientes</h2>
      </div>

      <div className="row">
        <div className="clientes">
          <a className="logo-clientes"href="http://www.astra-abc.com.br/" target="_blank">
            <img
              src="http://www.astra-abc.com.br/wp-content/uploads/2017/06/logotipo_ASTRA_250.png"
              alt="logo astra abc"
            />
          </a>
          <a className="logo-clientes" href="https://www.casadoconstrutor.com.br/" target="_blank">
            <img
              src="https://www.casadoconstrutor.com.br/wp-content/themes/waiodev-cc-v2/assets/img/img-logo.png"
              alt="Logo Casa do Construtor"
            />
          </a>
          <a
            href="https://www.facebook.com/pages/Comarkim-Com%C3%A9rcio-de-Armarinhos/206756719354647" target="
            _blank"
            className="logo-clientes"
          >
            <img src="images/logocomarkim.png" alt="Logo Comarkim" />
          </a>
        </div>
        <div className="clientes__smaller">
          <a className="logo-clientes" href="http://cristaltintas.com.br" target="_blank">
            <img
              src="http://app.csb2b.com.br/imagens/116307/logo/logo_ecommerce.png?2020-06-18 14:47:47"
              alt="logo cristal tintas"
            />
          </a>
          <a className="logo-clientes" href="http://www.ortizveiculos.com.br/index.html" target="_blank">
            <img
              src="http://www.ortizveiculos.com.br/assets/images/logo-branco.png"
              alt="Logo ortiz veiculos"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
