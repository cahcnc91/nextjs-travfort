import styles from './about-section.module.css'

export default function AboutSection() {
  return (
    <section id="quemsomos">
      <div className="row">
        <h2>Segurança em primeiro lugar</h2>
        <p className={styles.p}>
          A Travfort Alarmes possui 20 anos de atuação no segmento de segurança
          eletrônica. Contamos com uma equipe de profissionais altamente
          experientes e os mais avancados sistemas de alarmes, CFTV e cercas
          elétricas, para promover soluções eficientes as necessidades
          específicas de nossos clientes.
        </p>
        <p className={styles.p}>
          Nossas equipes são controladas por uma Central de Operações,
          devidamente equipada para operar 24 horas por dia, 365 dias ao ano.
        </p>
      </div>

      <div className="row">
        <div className={styles.boxFeatures}>
          <div className={styles.colBox}>
            <svg
              id="Layer_1"
              className="icon-big"
              viewBox="0 0 511.995 511.995"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m507.308 236.641-198.98-198.99c-28.86-28.85-75.8-28.85-104.66 0l-198.98 198.99c-6.25 6.25-6.25 16.38 0 22.63 6.24 6.25 16.38 6.25 22.62 0l12.69-12.69v203.4c0 25.405 20.595 46 46 46h80c5.523 0 10-4.477 10-10v-148c0-27.614 22.386-50 50-50h60c27.614 0 50 22.386 50 50v148c0 5.523 4.477 10 10 10h80c25.405 0 46-20.595 46-46v-203.4l12.69 12.69c3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.57 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63z"
                />
              </g>
            </svg>
            <h3>Servicos residenciais</h3>
            <p>
              Instalamos sistemas de alarme com capacidade de identificação de
              usuários individual.
            </p>
          </div>
          <div className={styles.colBox}>
            <svg
              id="Layer_1"
              viewBox="0 0 512 512"
              className="icon-big"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m466 128h-106v-24c0-57.346-46.654-104-104-104s-104 46.654-104 104v24h-106c-25.364 0-46 20.636-46 46v292c0 25.364 20.636 46 46 46h420c25.364 0 46-20.636 46-46v-292c0-25.364-20.636-46-46-46zm-209.442 176.003c30.623.3 55.442 25.305 55.442 55.997 0 24.092-15.297 44.669-36.685 52.554-1.98.73-3.315 2.59-3.315 4.7v6.294c0 8.615-6.621 16.028-15.226 16.434-9.188.433-16.774-6.889-16.774-15.982v-6.746c0-2.111-1.335-3.97-3.315-4.701-21.13-7.79-36.315-27.968-36.678-51.685-.135-8.819 6.806-16.666 15.624-16.864 9.005-.203 16.369 7.037 16.369 15.996 0 14.138 12.287 25.459 26.743 23.847 11.01-1.228 19.876-10.093 21.104-21.103 1.612-14.457-9.71-26.744-23.847-26.744-30.878 0-56-25.122-56-56 0-24.092 15.297-44.669 36.685-52.554 1.98-.73 3.315-2.59 3.315-4.7v-6.294c0-8.616 6.621-16.029 15.227-16.434 9.189-.432 16.773 6.889 16.773 15.982v6.746c0 2.111 1.335 3.97 3.315 4.701 21.131 7.79 36.316 27.969 36.678 51.686.135 8.82-6.807 16.666-15.626 16.864-9.004.201-16.367-7.038-16.367-15.997 0-13.234-10.767-24-24-24-13.291 0-24.093 10.86-23.999 24.172.093 13.285 11.272 23.7 24.557 23.831zm71.442-176.003h-144v-24c0-39.701 32.299-72 72-72s72 32.299 72 72z"
                />
              </g>
            </svg>
            <h3>Servicos empresariais</h3>
            <p>
              Planejamos a melhor abordagem de segurança eletrônica para seu
              comércio ou empresa.
            </p>
          </div>
          <div className={styles.colBox}>
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 503.604 503.604"
              className="icon-big"
            >
              <g>
                <g>
                  <path
                    d="M337.324,0H167.192c-28.924,0-53.5,23.584-53.5,52.5v398.664c0,28.916,24.056,52.44,52.98,52.44l170.412-0.184
			c28.92,0,52.58-23.528,52.58-52.448l0.248-398.5C389.908,23.452,366.364,0,337.324,0z M227.68,31.476h49.36
			c4.336,0,7.868,3.52,7.868,7.868c0,4.348-3.532,7.868-7.868,7.868h-49.36c-4.348,0-7.868-3.52-7.868-7.868
			C219.812,34.996,223.332,31.476,227.68,31.476z M198.02,33.98c2.916-2.912,8.224-2.952,11.136,0c1.46,1.456,2.324,3.5,2.324,5.588
			c0,2.048-0.864,4.088-2.324,5.548c-1.452,1.46-3.504,2.32-5.548,2.32c-2.084,0-4.088-0.86-5.588-2.32
			c-1.452-1.456-2.28-3.5-2.28-5.548C195.736,37.48,196.568,35.436,198.02,33.98z M250.772,488.008
			c-12.984,0-23.544-10.568-23.544-23.548c0-12.984,10.56-23.548,23.544-23.548s23.544,10.564,23.544,23.548
			C274.316,477.44,263.752,488.008,250.772,488.008z M365.488,424.908H141.232V74.756h224.256V424.908z"
                  />
                </g>
              </g>
            </svg>
            <h3>Acesse suas câmeras</h3>
            <p>
              Gerencie seu alarme de qualquer lugar, usando dispositivos móveis
              e computadores
            </p>
          </div>
          <div className={styles.colBox}>
            <svg
              className="icon-big"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z"
              />
            </svg>
            <h3>Cerca Elétrica</h3>
            <p>
              Seja para áreas residenciais ou para espaços comerciais,
              garantimos um serviço ágil e feito por profissionais treinados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}