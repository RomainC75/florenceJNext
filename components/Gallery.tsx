import React from 'react'
import Image from 'next/image'

const Gallery = ({ oeuvreImages }) => {
  console.log('oeuvreI', oeuvreImages)

  return (
    <div
      className="Gallery"
      style={{
        height: `${Math.ceil(oeuvreImages.length / 3) * 300 + 300}px`,
      }}
    >
      {oeuvreImages.map((image) => (
        <div key={image.url} className="image">
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
    </div>
  )
}

export default Gallery
