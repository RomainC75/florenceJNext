import React from 'react'
import { ImageIdConvertorInterface } from '../@types/image.type'

interface CarouselInterface{
    carouselImages: ImageIdConvertorInterface[]
}

const Carousel = ({carouselImages}:CarouselInterface) => {
    console.log('insiede carousel ', carouselImages)
  return (
    <div>Carousel</div>
  )
}

export default Carousel