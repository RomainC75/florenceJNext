import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MenuInterface {
  showMenu: boolean
  setShowMenu: (bool: boolean) => void
}

const Menu = ({ showMenu, setShowMenu }: MenuInterface) => {
  // const [menuImage, setMenuImage] = useState<null | ImageInterface>(null)

  //   useEffect(() => {
  //     getImagesByName(['menu-image']).then((images) => {
  //       setMenuImage(images[0])
  //     })
  //   }, [])

  useEffect(() => {
    console.log('show : ', showMenu)
  }, [showMenu])

  return (
    <div className={`Menu ${showMenu ? 'showMenu' : ''}`}>
      <div className="MenuContainer">
        <div className="links">
          <Link href="/oeuvres" onClick={() => setShowMenu(false)}>
            Oeuvres
          </Link>
          <Link href="/actualite" onClick={() => setShowMenu(false)}>
            Actualités
          </Link>
          <Link href="/enseignement" onClick={() => setShowMenu(false)}>
            Enseignement
          </Link>
          <Link href="/bio" onClick={() => setShowMenu(false)}>
            Bio
          </Link>
          <Link href="/contact" onClick={() => setShowMenu(false)}>
            Contact
          </Link>
        </div>
        <div className="image">
          <Image
            src="https://raw.githubusercontent.com/RomainC75/FlorenceJ/main/assets/profileAfroDetour%C3%A9.jpg.jpg"
            alt="profil afro"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
