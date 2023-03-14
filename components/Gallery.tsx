import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageInterface } from '../@types/image.type'
import BigImage from './BigImage'

interface GalleryInterface {
  oeuvreImages: ImageInterface[]
}

const Gallery = ({ oeuvreImages }: GalleryInterface) => {
  const [showBigImage, setShowBigImage] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<ImageInterface | null>(
    null
  )

  const handleSelectImage = (image: ImageInterface) => {
    setShowBigImage(true)
    setSelectedImage(image)
  }

  return (
    <div
      className="Gallery"
      style={{
        height: `${Math.ceil(oeuvreImages.length / 3) * 300 + 300}px`,
      }}
    >
      {oeuvreImages.map((image: ImageInterface) => (
        <div
          key={image.url}
          className="image"
          onClick={() => handleSelectImage(image)}
        >
          <Image
            className="img"
            src={image.url}
            alt={image.title}
            width={400}
            height={400}
          />
          <div className="curtain">
            <div className="title">{image.title}</div>
          </div>
        </div>
      ))}
      {showBigImage && (
        <BigImage image={selectedImage} setShowBigImage={setShowBigImage} />
      )}
    </div>
  )
}

export default Gallery
