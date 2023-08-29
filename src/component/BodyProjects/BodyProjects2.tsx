import "./BodyProjects.scss"
import Image from "next/image"
import PLAY from "../../../public/Player.svg"
import TODO from "../../../public/todolispng.png"
import MED from "../../../public/medicine.png"
import SOR from"../../../public/Gifs animados Dado 8.gif"
import EASY from"../../../public/Illustration-3-3.png"


const BodyProjects2 = () => {
  return (
    <section className="Projects">

          <div className="Adjust-Cards">


          <div className="card" id='adjustable-div'>
             <Image src={PLAY} alt="Minha Imagem"
             width={70}/>
                            <h5>Player Video</h5>
                            <p> Player de Vídeo em realidade virtual e ambient light com parallax,
                                Tecnologias: Vite, React, Tailwind, Javascript.
                            </p>
                            <a href="https://pro-video-react.vercel.app/" target="_blank"> Ver Projeto </a>
                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={TODO} alt="Minha Imagem"
                        width={70}/>

                            <h5>To-Do List </h5>
                            <p> Uma lista de tarefas que permite ao usuário um controle de fluxo de tarefas do dia; podendo adicionar, excluir e também foi adicionado um botão de “Completar” Tecnologias: Vite,React, Javascript, Css.
                            </p>
                            <a href="https://proreact-todo-f43mhkyfb-mahfelix.vercel.app/" target="_blank"> Ver Projeto </a>

                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={MED} alt="Minha Imagem"
                        width={70}/>

                            <h5>Sistema de Cadastro</h5>
                            <p>  Sistema de cadastro médico, desenvolvido no Figma e estruturado com as tecnologias: React, JavaScript, Forms
                                <br></br>

                            </p>
                            <a href="https://react-project-sign-53cm.vercel.app/Users" target="_blank"> Ver Projeto </a>
                        </div>

                        <div className="card" id='adjustable-div'>
                        <Image src={SOR} alt="Minha Imagem"
                        width={70}/>

                            <h5>Sorteador</h5>
                            <p>  Projeto é um site de sorteio que é realizado entre dois valores que quando acionados, gera um número aleatório entre eles. Tecnologias: Html, Css, Javascript.
                            </p>
                            <a href="https://luckydraw-byagnaldofelix.netlify.app/" target="_blank"> Ver Projeto </a>

                        </div>

                         <div className="card" id='adjustable-div'>
                        <Image src={EASY} alt="Minha Imagem"
                        width={70}/>

                            <h5>Easy Shopping</h5>
                            <p> Projeto de uma Lading page para uma Loja de Roupas, desenvolvido com as tecnologias:
                                Html e Css, com responsividade para Mobile.
                            </p>
                            <a href="https://delightful-paprenjak-c30109.netlify.app" target="_blank"> Ver Projeto </a>
                        </div>

              </div>
        </section>
  )
}

export default BodyProjects2