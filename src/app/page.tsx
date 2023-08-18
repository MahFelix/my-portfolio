import Header from '@/component/header/header'

import '../styles/home.scss'

export default function Home() {
  return (
    <main className='Container'>
      <Header/>

      <div className="experience">
        <h3> Experience</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
        <div className="info">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸  EN - Basic</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
          <span>🎓</span>
          <span>
            Graduating Computer Science - Universidade Federal de Sergipe
         </span>
          </div>
        </div>
        <div className="btns">
          <div className="social">

          </div>
          <button>Contact me!</button>
        </div>

      </div>

    </main>
  )
}
