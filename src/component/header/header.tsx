/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import "./header.scss"

const header = () => {
  return (
  <div className="header">
            <div>
              <h1> Hi, I'm Agnaldo!👋</h1>
              <h2> Software Engineer</h2>
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