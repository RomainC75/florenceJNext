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
              <Link href="http://www.instagram.com/jacquesson_florence">
                <div>
                  <BsInstagram />
                </div>
              </Link>
              <Link href="http://www.facebook.com/florence.jacquesson">
                <div>
                  <BsFacebook />
                </div>
              </Link>
              <Link href="http://www.pinterest.fr/jacquessonf">
                <div>
                  <BsPinterest />
                </div>
              </Link>
              <Link href="https://www.youtube.com/watch?v=wj3i3C6zAAk">
                <div>
                  <BsYoutube />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__links">
          <div className="underlinee">
            <Link href="oeuvres">Oeuvres</Link>
          </div>
          <div className="underlinee">
            <Link href="/actualite">Actualité</Link>
          </div>
          <div className="underlinee">
            <Link href="enseignement">Enseignement</Link>
          </div>
          <div className="underlinee">
            <Link href="bio">Bio</Link>
          </div>
          <div className="underlinee">
            <Link href="contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
