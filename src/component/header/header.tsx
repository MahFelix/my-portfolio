/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import "./header.scss";
import AboutMe from '../AboutMe/aboutme';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Olá, eu sou Agnaldo Felix 👋</h1>
          <h2>Desenvolvedor web Full Stack </h2>
        </div>
        <Image
          src="/me2.jpg"
          alt="Foto de Agnaldo Felix"
          width={300}
          height={300}
          priority
          className="header-image"
        />
      </div>
    </header>
  );
};

export default Header;
