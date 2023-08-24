import "./BodyProjects.scss"
import { SectionTitle } from "../sectionTitle/sectionTitle"
import Image from "next/image"
import RP from "../../../public/ProjectImages/React-Proje.png"
import CCC from "../../../public/ProjectImages/Ethan Nova.png"
import STR from "../../../public/ProjectImages/starbucks.png"
import CTRL from"../../../public/ProjectImages/controller.png"


export default function Projects(){
    return(
        <section>
          <SectionTitle text= 'Main Projects' />
          <div className="card" id='adjustable-div'>
             <Image src={RP} alt="Minha Imagem"
             width={70}

               />

                            <h5>React Project FullStack</h5>
                            <p> O projeto consiste em Cadastrar Usuarios, utilizando seu Nome e Idade.
                                Utilizei o React e suas ferramentas Hooks, como o useState, useRef e useEffect; para gerar um estado e armazenar os usuários cadastrados.
                            </p>
                            <a href="https://first-react-project-8szo.vercel.app" target="_blank"> Ver Projeto </a>
                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={CCC} alt="Minha Imagem"
                        width={70}

               />

                            <h5>Character Chronicle Caelum </h5>
                            <p> O projeto trata-se da história de um universo fictício com personagens super dotados que residem no planeta de Caelum.<br></br>
                            Tecnologias utilizadas: Figma, Vite React, JavaScript, Tailwind

                            </p>
                            <a href="https://chronicle-ddndcvz9w-mahfelix.vercel.app/" target="_blank"> Ver Projeto </a>
                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={STR} alt="Minha Imagem"
                        width={70}

               />

                            <h5>Projeto Starbucks  </h5>
                            <p> Projeto de uma Landing Page da Starbucks.
                                <br></br>
                                Tecnologias utilizadas: JavaScript, Html e Css, com responsividade para Mobile.


                            </p>
                            <a href="https://projetostarbackspg.netlify.app/" target="_blank"> Ver Projeto </a>
                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={CTRL} alt="Minha Imagem"
                        width={70}

               />

                            <h5>Projeto Playstation Store</h5>
                            <p> Projeto de uma Landing Page da Playstation Store.<br></br>
                            Tecnologias utilziadas: JavaScript, Html e Css, com responsividade para Mobile.



                            </p>
                            <a href="https://radiant-lily-703489.netlify.app/" target="_blank"> Ver Projeto </a>
                        </div>
        </section>
    )
}