import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.scss"
import Image from "next/image"
import EUA from '../../../public/icons/EUA.png'
import BR from '../../../public/icons/BR.png'

export function Info(){

  return(
       <div className="info">
<<<<<<< HEAD
          <SectionTitle  text="Linguagens"/>
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

=======
>>>>>>> 3eca9f67bcfaca430cd8bb9d03d259c59df61987
          <SectionTitle  text="Educação"/>
          <div className="educational-info">
          <span className="graduicon">🎓</span>
          <span className="graduating">
            Graduando Ciências da Computação - Universidade Federal de Sergipe
         </span>
          </div>
        </div>
  )
}