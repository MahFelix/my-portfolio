import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectionTitle"
import BodyProjects from '../BodyProjects/BodyProjects'
import "./mystacks.scss"
import "../BodyProjects/BodyProjects.scss"


const mystacks = () => {
  return (
    <div>
   <div className="experience-time">
        <SectionTitle text= 'My stacks' />
          <div className="experience-stacks">
             <Image
              src="/react.svg"
              alt="React Logo"
              width={35}
              height={35}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span> 1 Year </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/javascript2.png"
              alt="Javascript Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span> 1 Year </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/nodejs.svg"
              alt="Nodejs Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span> 7 months </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/nextjs.png"
              alt="Next Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span> 3 Months </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/tailwind.svg"
              alt="Tailwind Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span> 1 Year </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/typescript4.png"
              alt="Typescript Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span> 3 months </span>
              </div>
            </div>
          </div>
           <div className="experience-stacks">
             <Image
              src="/sass.png"
              alt="Sass Logo"
              width={35}
              height={35}
              priority
            />
             <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span> 7 months </span>
              </div>
            </div>
          </div>
          <div/>
        </div>
   </div>
  )
}

export default mystacks