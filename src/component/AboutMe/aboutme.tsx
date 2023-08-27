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
        About Me
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h1> 👨‍💻Agnaldo Felix</h1>
            <br></br>
            <h2> Desde o ensino médio, minha paixão por programação e tecnologias tem crescido. No entanto, minha verdadeira imersão nesse campo aconteceu durante minha entrada na faculdade de Ciências da Computação em 2022. Atualmente, estou totalmente dedicado a esse mundo e minha motivação para aprender cresce a cada dia. Minha busca diária por conhecimento, o aprimoramento das minhas habilidades interpessoais e minha participação em projetos específicos têm sido constantes. Esses projetos refletem meu alinhamento com as tecnologias demandadas pelo mercado e contribuem tanto para o meu crescimento profissional quanto pessoal.
               <br></br>
            Meu objetivo é me tornar um programador "Full Stack" altamente qualificado para enfrentar as demandas do mercado de trabalho.
              <br></br> <br></br>
          Estou ansioso para discutir como poderíamos colaborar. <br></br> <br></br>Abaixo, você encontrará detalhes sobre minhas habilidades específicas e alguns projetos que realizei.</h2>



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