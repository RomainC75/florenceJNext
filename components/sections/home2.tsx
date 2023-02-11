import React from "react";
import Image from "next/image";
import { ImageInterface } from "../../@types/image.type";
import RichText from "../richText";
import { Document } from "@contentful/rich-text-types";

interface Home2Interface {
  document: Document;
  images: ImageInterface[];
}

const Home2 = ({ document, images }: Home2Interface): JSX.Element => {
  console.log("home2 : ", images);
  return (
    <section className="Home2">
      <div className="bigImage">
        <Image
          src={images[1].url}
          alt={images[1].fileName}
          width={1300}
          height={400}
        />
      </div>
      <div className="tinyImage">
        <Image
          src={images[2].url}
          alt={images[2].fileName}
          width={200}
          height={200}
        />
      </div>
      <div className="text">
        <div className="text__title">
          <h3 className="Didone">Sculpture</h3>
        </div>
        <div className="text__info elegantRText">
          <RichText document={document} />
        </div>
      </div>
    </section>
  );
};

export default Home2;
