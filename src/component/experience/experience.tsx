/* eslint-disable react/no-unescaped-entities */
import {SectionTitle}  from "../sectionTitle/sectionTitle"
import "./experience.scss"
import Image from "next/image"
import DBD from '../../../public/dbd.png'
import Aboutme from "../AboutMe/aboutme"




const Experience = () => {
  return (
      <div className="experience">
        <SectionTitle text= 'Experience' />
<p>Tenho um ano de experiência como desenvolvedor full stack, com foco especializado em front-end. Meus projetos demonstram meu compromisso em utilizar tecnologias alinhadas ao mercado.</p>

<div className="btn-person">
  <div>
    <Aboutme />
  </div>
  <div>

    <a className="curriculo-pdf" href="/CV_Desenvolvedor_Front_End_Agnaldo_Felix.pdf" download > Curriculo
      <Image src={DBD} alt="Minha Imagem"
             width={25}
              height={25}
               />
    </a>

</div>

  </div>

        </div>
  )
}

export default Experience