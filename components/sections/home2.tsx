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
    <section>
      <div>
        <RichText document={document} />
      </div>
      <div>
        <Image
          src={images[1].url}
          alt={images[1].fileName}
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={images[2].url}
          alt={images[2].fileName}
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Home2;
