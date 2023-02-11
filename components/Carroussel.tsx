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
        <ul>
            {carouselImages.map((image, i) => 
                <li className="carouselImage" key={`${i}-${image.fileName}`}>
                    <div>
                    <Image src={image.url} width={500} height={340} alt={image.title}/>
                    </div>
                    <div>{image.title}</div>
                </li>
            )}

        </ul>
    </div>
  );
};

export default Carousel;
