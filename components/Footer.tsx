import React from 'react'
import Link from 'next/link'
import { BsInstagram, BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs'
import SendMessage from './input/sendMessage'

const Footer = (): JSX.Element => {
  return (
    <footer className="footer Didone">
      <div className="footerBigContainer">
        <div className="footer__contactSocial">
          <SendMessage />

          <div id="mail" className="footer__contactSocial__social">
            <h3 className="footer__contactSocial__social__title">
              Retrouvez-moi sur :
            </h3>
            <div className="footer__contactSocial__social__social">
              <Link href="#">
                <div>
                  <BsInstagram />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <BsFacebook />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <BsPinterest />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <BsYoutube />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__links">
          <div className="underlinee">
            <Link href="oeuvres.html">Oeuvres</Link>
          </div>
          <div className="underlinee">
            <Link href="#">Actualité</Link>
          </div>
          <div className="underlinee">
            <Link href="#">Cours</Link>
          </div>
          <div className="underlinee">
            <Link href="#">Archives</Link>
          </div>
          <div className="underlinee">
            <Link href="contact.html">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
