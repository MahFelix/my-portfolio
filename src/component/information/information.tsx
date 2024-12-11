import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.scss"
import Image from "next/image"
import EUA from '../../../public/icons/EUA.png'
import BR from '../../../public/icons/BR.png'

export function Info(){

  return(
       <div className="info">
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