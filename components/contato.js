import PersonIcon from "./icons/person";
import PhoneIcon from "./icons/phone";
import EmailIcon from "./icons/email";
import CelphoneIcon from "./icons/celphone";
import axios from "axios";
import { useForm } from "./hooks/useForm";

export default function ContatoSection() {
  const [inputs, setChangeInputs] = useForm({
    name: "",
    email: "",
    message: "",
  });
  async function getUser() {
    try {
      const response = await axios.post("/api/email", {
        name: "cah",
        email: 'camila@test.com',
        message: 'test1'
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();

  return (
    <section id="contato">
      <div className="row">
        <h2>FALE CONOSCO</h2>
      </div>
      <div className="row contato-row">
        <div className="span-1-of-3">
          <div className="row">
            <h3>Contatos</h3>
          </div>

          <div className="row">
            <div className="">
              <PhoneIcon></PhoneIcon>
              11 4990-5508
            </div>

            <div className="">
              <EmailIcon></EmailIcon>
              travfort@ig.com.br
            </div>
          </div>
          <div className="row">
            <div className="gerente-comercial">
              <PersonIcon></PersonIcon>
              Carlos Costa
            </div>
            <div className="">
              <CelphoneIcon></CelphoneIcon>
              11 996019288
            </div>

            <div className="gerente-comercial">
              <PersonIcon></PersonIcon>
              Raul Costa
            </div>
            <div className="">
              <CelphoneIcon></CelphoneIcon>
              11 996019288
            </div>
          </div>
        </div>
        <div class="span-2-of-3">
          <form method="post" action="#" className="contact-form">
            <div className="row">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu Nome"
                required
                value={inputs.name}
                onChange={setChangeInputs}
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu Email"
                required
                value={inputs.email}
                onChange={setChangeInputs}
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
                value={inputs.message}
                onChange={setChangeInputs}
              ></textarea>
            </div>
            <div className="row">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
