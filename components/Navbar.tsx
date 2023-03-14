import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import classes from './navbar.module.css'
import Link from 'next/link'

const Navbar = (): JSX.Element => {
  const [YPosition, setYPosition] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYPosition(window.pageYOffset)
    })
  })

  return (
    <>
      <div
        className={`NavbarBackground NavbarHeight ${
          YPosition > 0 && 'NavbarBackground-visible'
        }`}
      ></div>
      <nav
        className={`Navbar NavbarHeight ${YPosition > 0 ? 'black' : 'white'}`}
      >
        <div className="openMenu">y</div>
        <div className="">
          <Image
            className="signateur"
            src={
              YPosition > 0
                ? '/assets/signature-black.png'
                : '/assets/signature-white.png'
            }
            alt="signature"
            width={150}
            height={60}
          />
        </div>
        <div className="message_btn">
          <Link href="/#mail">
            <p className={`${YPosition > 0 ? 'black' : 'white'}`}>Message</p>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
