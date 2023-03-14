import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImagesByName } from '../lib/contentfulImage'
import { ImageInterface } from '../@types/image.type'

interface MenuInterface {
  showMenu: boolean
  //   menuImage: ImageInterface
}

const Menu = ({ showMenu }: MenuInterface) => {
  const [menuImage, setMenuImage] = useState<null | ImageInterface>(null)

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
          <Link href="/oeuvres">Oeuvres</Link>
          <Link href="/actualite">Actualités</Link>
          <Link href="/enseignement">Enseignement</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          {menuImage && (
            <Image
              src={menuImage.url}
              alt={menuImage.title}
              width={500}
              height={500}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu
