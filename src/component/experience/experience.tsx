/* eslint-disable react/no-unescaped-entities */
import {SectionTitle}  from "../sectionTitle/sectionTitle"
import "./experience.scss"
import BX from '../../../public/baixar.png'
import Image from "next/image"
import DBD from '../../../public/dbd.png'



const Experience = () => {
  return (
      <div className="experience">
        <SectionTitle text= 'Experience' />
        {/* <p>Desde o ensino médio, minha paixão por programação e tecnologias tem crescido. No entanto, minha verdadeira imersão nesse campo aconteceu durante minha entrada na faculdade de Ciências da Computação em 2022. Atualmente, estou totalmente dedicado ao meu curso e minha motivação para aprender cresce a cada dia. Minha busca diária por conhecimento, o aprimoramento das minhas habilidades interpessoais e minha participação em projetos específicos têm sido constantes. Esses projetos refletem meu alinhamento com as tecnologias demandadas pelo mercado e contribuem tanto para o meu crescimento profissional quanto pessoal. Meu objetivo é me tornar um programador "Full Stack" altamente qualificado para enfrentar as demandas do mercado de trabalho.

Estou ansioso para discutir como poderíamos colaborar. Abaixo, você encontrará detalhes sobre minhas habilidades específicas e alguns projetos que realizei.</p> */}

<p>Possuo 2 anos de experiência como desenvolvedor full stack, com enfoque especializado em front-end. Minha jornada inclui projetos pontuais que refletem meu comprometimento em utilizar tecnologias alinhadas ao mercado de trabalho.</p>

  <div>
    <a href="/CV_Desenvolvedor_Front_End_Agnaldo_Felix.pdf" download > Curriculo
      <Image src={DBD} alt="Minha Imagem"
             width={25}
              height={25}
               />

    </a>
  </div>

        </div>
  )
}

export default Experience