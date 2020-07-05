import PersonIcon from "./icons/person";
import PhoneIcon from "./icons/phone";
import EmailIcon from "./icons/email";
import CelphoneIcon from "./icons/celphone";
import axios from "axios";
import { useState } from "react";

export default function ContatoSection() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false)

  const setChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();

    if(inputs.name && inputs.email && inputs.message){
      try {
        const response = await axios.post("/api/email", {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message
        });

        if(response.data.ok){
          setEmailSent(true)
          setInputs({
            name: "",
            email: "",
            message: "",
          })
        }
      } catch (error) {
        console.error(error);
      }

    } else {
      setError(true)
    }

  }

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
        <div className="span-2-of-3">
          <form method="post" action="#" className="contact-form" onSubmit={submitForm}>
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
                required
              ></textarea>
            </div>
            <div className="row">
              <input type="submit" value="Enviar" />
            </div>
            {emailSent && <p style={{paddingTop: '1rem'}}><b>* Seu email foi enviado com sucesso!</b></p>}
          </form>
        </div>
      </div>
    </section>
  );
}
