import React from "react";
import { ImageIdConvertorInterface, ImageInterface } from "../@types/image.type";
import Image from "next/image";

interface CarouselInterface {
  carouselImages: ImageInterface[];
}

const Carousel = ({ carouselImages }: CarouselInterface) => {
  console.log("insiede carousel ", carouselImages);
  
  return (
    <div className="Carousel">
      {carouselImages.map((image, i) => 
        <div className="carouselImage" key={`${i}-${image.fileName}`}>
            <Image src={image.url} width={500} height={340} alt={image.title}/>
            <div>{}</div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
