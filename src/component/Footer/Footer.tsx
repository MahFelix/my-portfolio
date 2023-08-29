/* eslint-disable react/no-unescaped-entities */
import "../Footer/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p>"A tecnologia move o mundo."</p>
      <h4>~Steve Jobs~</h4>

      <form action="https://formsubmit.co/marcelo12543@hotmail.com" method="POST">
        <input type="hidden" name="_next" value="https://formulario-obrigado-return.netlify.app/" />
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </footer>
  );
};

export default Footer;