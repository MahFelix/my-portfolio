
import { InstIcon } from "../icons/instagram-icon"
import { WhatsIcon } from "../icons/whatsapp-icon"
import { LinkIcon } from "../icons/linkedin-icon"
import { GitIcon } from "../icons/github-icon"

import "./social-btns.scss"

export function SocialBtns(){
    return(
       <div className="social" >
          <a href="" target="_blank">
            <span><InstIcon /></span>
             </a>
          <a href="https://www.linkedin.com/in/agnaldofelix/" target="_blank">
            <span><LinkIcon /></span>
             </a>
          <a href="https://wa.me/5579996848609" target="_blank">
            <span><WhatsIcon /></span>
             </a>
          <a href="https://github.com/MahFelix" target="_blank">
            <span><GitIcon /></span>
          </a>
      </div>
    )
}