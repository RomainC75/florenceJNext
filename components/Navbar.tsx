import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import classes from './navbar.module.css'
import Link from 'next/link'
import Menu from './Menu'

const Navbar = (): JSX.Element => {
  const [YPosition, setYPosition] = useState<number>(0)
  const [showMenu, setShowMenu] = useState<boolean>(false)

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
        <div className="openMenu" onClick={() => setShowMenu(!showMenu)}>
          y
        </div>
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
      <Menu showMenu={showMenu} />
    </>
  )
}

export default Navbar
