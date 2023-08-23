import Header from '@/component/header/header'
import Experience from '../component/experience/experience'
import { Info } from '@/component/information/information'
import { EmailIcon } from '@/component/icons/email-icon'
import Mystacks from '../component/mystacks/mystacks'
import "../component/mystacks/mystacks.scss"
import '../styles/home.scss'
import { SocialBtns } from '@/component/social-btns/social-btns'



export default function Home() {


  return (
    <main className='Container'>
      <Header/>
      <Experience />
      <Mystacks />
      <Info />


        <div className="btns">
          <div className="social">
              <SocialBtns />
          </div>

          <button
          className='btn-primary'
          >
            Contact me!

            <EmailIcon />
            </button>
        </div>
    </main>
  )
}
