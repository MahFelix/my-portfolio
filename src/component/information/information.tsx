import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.scss"
import Image from "next/image"
import EUA from '../../../public/icons/EUA.png'
import BR from '../../../public/icons/BR.png'

export function Info(){

  return(
       <div className="info">
          <SectionTitle  text="Languages"/>
          <div className="languages-info">
            <span>
            <Image src={EUA} alt="Minha Imagem"
             width={25}
              height={25}

               />
            EN - Basic  - Fluency in Progress</span>
            <span>
            <Image src={BR} alt="Minha Imagem"
             width={25}
              height={25}
               />

              PT-BR - Native Speaker</span>
          </div>

          <SectionTitle  text="Education"/>
          <div className="educational-info">
          <span className="graduicon">🎓</span>
          <span className="graduating">
            Graduating Computer Science - Universidade Federal de Sergipe
         </span>
          </div>
        </div>
  )
}