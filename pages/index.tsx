import { getEncartOnPage } from "../lib/api/text.api";
import { getImagesByName } from "../lib/contentfulImage";
import Home1 from "../components/sections/home1";
import Home2 from "../components/sections/home2";
import { Document } from "@contentful/rich-text-types";
import {
  ImageIdConvertorInterface,
  ImageInterface,
} from "../@types/image.type";
import Image from "next/image";
import { useState, useEffect } from "react";
import Carroussel from "../components/Carroussel";
import { getCarouselImages } from "../lib/api/imageIdConvertor.api";

interface IndexInterface {
  home1Document: Document;
  home2Document: Document;
  documents: Document;
  homeImages: ImageInterface[];
  carouselImages?: ImageIdConvertorInterface[];
  error: boolean;
}

export default function Index({
  home1Document,
  home2Document,
  documents,
  homeImages,
  carouselImages,
  error,
}: IndexInterface) {
  console.log("====================");

  const [YPosition, setYPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYPosition(window.pageYOffset);
    });
  });
  if (error) {
    return <p>There is an error related with Contenful</p>;
  }

  return (
    <div className="Index">
      <div className="header">
        <div
          className="curtain"
          style={{ background: `rgba(0, 0, 0, ${0.4 + YPosition * 0.001})` }}
        ></div>
        <div className="Didone title">
          <h1>Florence Jacquesson</h1>
          <p>Sculpteur Animalier</p>
        </div>
        <Image
          src={homeImages[0].url}
          alt={homeImages[0].fileName}
          width={1280}
          height={576}
          className="bigImage"
        />
      </div>
      <div className="content">
        <Home1 document={documents[0]} />
        <Home2 document={documents[1]} images={homeImages} />
        {/* <Carroussel carouselImages={carouselImages}/> */}
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  let error = false;
  const documents = (await getEncartOnPage("home")).map(
    (encart) => encart.rtext.json
  );

  console.log("data ", documents);
  const images = await getCarouselImages();
  console.log("+++++", images);
  const fullInfoImages = await getImagesByName(images.map((img) => img.name));
  console.log("+++FULL INFO IMG+++", fullInfoImages);
  const homeImages = await getImagesByName([
    "home-header",
    "home-section2-1",
    "home-section2-2",
  ]);

  error = homeImages.includes(null) || fullInfoImages.includes(null) || fullInfoImages.length===0

  return {
    props: {
      documents,
      homeImages,
      error,
    },
    revalidate: 43200,
  };
}
