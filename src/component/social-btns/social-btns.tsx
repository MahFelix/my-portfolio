
import { InstIcon } from "../icons/instagram-icon"
import { WhatsIcon } from "../icons/whatsapp-icon"
import { LinkIcon } from "../icons/linkedin-icon"
import { GitIcon } from "../icons/github-icon"

import "./social-btns.scss"

export function SocialBtns(){
    return(
       <div className="social">
          <a href="">
            <InstIcon />
             </a>
          <a href="">
            <LinkIcon />
             </a>
          <a href="">
            <WhatsIcon />
             </a>
          <a href="">
            <GitIcon />
          </a>
      </div>
    )
}