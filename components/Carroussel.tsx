import React, { useState, useEffect } from 'react'
import { ImageInterface } from '../@types/image.type'
import Image from 'next/image'
import { getImageWidthAndGap } from '../utils/carouselDimensionsExtractor'

interface CarouselInterface {
  carouselImages: ImageInterface[]
}

const Carousel = ({ carouselImages }: CarouselInterface) => {
  const [shift, setshift] = useState(0)
  console.log('inside carousel ', carouselImages)
  const [YPosition, setYPosition] = useState<number>(0)

  const [selectedImage, setSelectedImage] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYPosition(window.pageYOffset)
    })
  }, [])

  useEffect(() => {
    const dimensions = getImageWidthAndGap()
    setshift(selectedImage * (dimensions.width + dimensions.gap))
  }, [selectedImage])

  const handleMoveCarousel = (direction) => {
    console.log('directions: ', direction)
    if (
      (direction === 1 && selectedImage < carouselImages.length) ||
      (direction === -1 && selectedImage > 0)
    ) {
      setSelectedImage(selectedImage + direction)
    }
  }

  const handleClicked = (el) => {
    console.log(el.target)
    console.log(el.clientX)
  }

  return (
    <div className={`Carousel ${YPosition > 1800 ? 'dispSect' : 'hideSect'}`}>
      <ul>
        {carouselImages.map((image, i) => (
          <li
            className="carouselImage"
            style={{ transform: `translateX(${shift}px)` }}
            key={`${i}-${image.fileName}`}
          >
            <div>
              <Image
                onMouseDown={(el) => handleClicked(el)}
                src={image.url}
                width={500}
                height={340}
                alt={image.title}
              />
            </div>
            <div className="imageTitle Didone">{image.title}</div>
          </li>
        ))}
      </ul>
      <div className="btns">
        <div className="btn" onClick={() => handleMoveCarousel(-1)}>
          {' '}
          &lt;{' '}
        </div>
        <div className="btn" onClick={() => handleMoveCarousel(1)}>
          {' '}
          &gt;{' '}
        </div>
      </div>
    </div>
  )
}

export default Carousel
