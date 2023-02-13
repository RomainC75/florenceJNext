import React from 'react'
import Link from 'next/link'
import {BsInstagram, BsFacebook, BsPinterest, BsYoutube} from 'react-icons/bs'

const Footer = ():JSX.Element => {
  return (
    <footer className="footer Didone">

            <div className="footerBigContainer">
                <div className="footer__contactSocial">
                    <div className="footer__contactSocial__contact">
                        <h3>Envoyez moi un message :</h3>
                        <div className="footer__contactSocial__contact__container">
                            <div className="footer__contactSocial__contact__container__up">
                                <input id="nameInput" type="text" placeholder="Nom"/>
                                <input type="text" placeholder="Mail"/>
                            </div>
                            <textarea placeholder="Text"></textarea>
                        </div>
                    </div>
                    
                    <div id="mail" className="footer__contactSocial__social">
                        <h3 className="footer__contactSocial__social__title">
                            Retrouvez-moi sur :
                        </h3>
                        <div className="footer__contactSocial__social__social">
                            <a href="#"><div><BsInstagram/></div></a>
                            <a href="#"><div><BsFacebook/></div></a>
                            <a href="#"><div><BsPinterest/></div></a>
                            <a href="#"><div><BsYoutube/></div></a>
                        </div>
                        
                    </div>
                </div>

                <div className="footer__links">
                    <div className="underlinee"><a href="oeuvres.html">Oeuvres</a></div>
                    <div className="underlinee"><a href="#">Actualité</a></div>
                    <div className="underlinee"><a href="#">Cours</a></div>
                    <div className="underlinee"><a href="#">Archives</a></div>
                    <div className="underlinee"><a href="contact.html">Contact</a></div>
                </div>


            </div>

        </footer>
  )
}

export default Footer