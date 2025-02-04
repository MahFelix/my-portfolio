/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import "./header.scss";
import AboutMe from '../AboutMe/aboutme';

const Header = () => {
  return (
<<<<<<< HEAD
  <div className="header">
            <div>
              <h1> Olá, Eu sou Agnaldo!👋</h1>
              <h2> Engenheiro de Software</h2>
            </div>


             <Image
              src="/me2.jpg"
              alt="Vercel Logo"
              width={300}
              height={300}
              priority
            />
=======
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
>>>>>>> 3eca9f67bcfaca430cd8bb9d03d259c59df61987
      </div>
    </header>
  );
};

export default Header;
