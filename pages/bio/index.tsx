import Image from "next/image";
import React from "react";
import { ImageInterface } from "../../components/@types/image.type";
import { getAltFromFileName } from "../../lib/api/imageIdConvertor.api";
import { getEncartOnPage } from "../../lib/api/text.api";
import { getImagesByName } from "../../lib/contentfulImage";
import { Document } from "@contentful/rich-text-types";
import RichText from "../../components/richText";

interface BioPageInterface {
  images: ImageInterface[];
  documents: Document[];
}

const Bio = ({ images, documents }: BioPageInterface) => {
  return (
    <div className="Bio">
      <Image
        src={images[0].url}
        alt={getAltFromFileName(images[0].fileName)}
        width={1280}
        height={400}
      />

      <section className="sectionOne">
        <RichText document={documents[0]} />
        <Image
          src={images[1].url}
          alt={getAltFromFileName(images[1].fileName)}
          width={300}
          height={442}
        />
      </section>

      <section className="section2">
        <RichText document={documents[1]} />
        <Image
          src={images[2].url}
          alt={getAltFromFileName(images[2].fileName)}
          width={471}
          height={750}
        />
      </section>

      <section className="section3">
        <RichText document={documents[2]} />
      </section>

      <section className="section4">
        <RichText document={documents[3]} />
        <Image
          src={images[3].url}
          alt={getAltFromFileName(images[3].fileName)}
          width={470}
          height={470}
        />
      </section>

      <section className="section5">
        <RichText document={documents[4]} />
      </section>
      
    </div>
  );
};

export default Bio;

export async function getStaticProps() {
  const images = await getImagesByName([
    "bio-header",
    "bio-section1",
    "bio-section2",
    "bio-section4",
  ]);
  const encarts = (await getEncartOnPage("bio")).map(
    (encart) => encart.rtext.json
  );
  console.log(
    "===> encarts : ",
    encarts.map((encart) => encart.content.data)
  );
  return {
    props: {
      images,
      documents: encarts,
    },
    revalidate: 43200,
  };
}
