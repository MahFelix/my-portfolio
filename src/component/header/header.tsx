/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import "./header.scss"
import Aboutme from '../AboutMe/aboutme'

const header = () => {
  return (
  <div className="header">
            <div>
              <h1> Olá, Eu sou Agnaldo!👋</h1>
              <h2> Engenheiro de Software</h2>
            </div>


             <Image
              src="/me2.jpg"
              alt="Vercel Logo"
              width={300}
              height={300}
              priority
            />
      </div>
  )
}

export default header