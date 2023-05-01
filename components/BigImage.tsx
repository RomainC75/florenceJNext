import React from 'react'
import { ImageInterface } from '../@types/image.type'
import Image from 'next/image'
import { ImCross } from 'react-icons/im'

interface BigImageInterface {
  image: ImageInterface
  setShowBigImage: (bool: boolean) => void
}

const BigImage = ({
  image,
  setShowBigImage,
}: BigImageInterface): JSX.Element => {
  return (
    <div className="BigImage">
      <div className="container">
        <Image src={image.url} width={600} height={600} alt={image.title} />
        <div className="crossIcon" onClick={() => setShowBigImage(false)}>
          <ImCross />
        </div>
        <p>{image.title}</p>
      </div>
    </div>
  )
}

export default BigImage
