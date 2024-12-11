/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react';
import './aboutme.scss';

const Aboutme = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button className="btn-aboutme" onClick={handleClick}>
        Sobre mim
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h1>👨‍💻 Agnaldo Felix</h1>
            <br />
            <h2>
              Minha paixão por programação e tecnologia começou no ensino médio, mas foi durante minha graduação em Ciências da Computação, iniciada em 2022, que mergulhei de cabeça nesse universo. Desde então, tenho buscado constantemente aprender, me atualizar e desenvolver projetos alinhados com as demandas do mercado.
              <br /><br />
              Atualmente, trabalho como desenvolvedor web na **Qintess**, onde tenho adquirido experiência prática no desenvolvimento de soluções robustas e inovadoras. Esse papel tem me permitido aplicar minhas habilidades técnicas em projetos reais e colaborar com equipes dinâmicas, contribuindo para meu crescimento profissional e pessoal.
              <br /><br />
              Além disso, participei de diversos projetos que exploram tecnologias modernas como React, Node.js, Tailwind e TypeScript. Esses projetos reforçaram minha capacidade de criar aplicações web rápidas, responsivas e escaláveis.
              <br /><br />
              Meu objetivo é me consolidar como programador "Full Stack" altamente qualificado, capaz de lidar com os desafios do mercado e contribuir para o sucesso das equipes e organizações que faço parte.
              <br /><br />
              Estou empolgado para compartilhar minhas experiências e discutir possíveis colaborações. Abaixo, você encontrará mais detalhes sobre minhas habilidades e projetos realizados.
            </h2>

            <button className="popup-close" onClick={handleClick}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutme;
