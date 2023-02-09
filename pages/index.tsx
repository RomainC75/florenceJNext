import { getAllEncart } from "../lib/api/text.api";
import RichText from "../components/richText";
import {
  getImageById,
  getImageByName,
  getImagesByName,
} from "../lib/contentfulImage";
import Home1 from "../components/sections/home1";
import Home2 from "../components/sections/home2";
import { Document } from "@contentful/rich-text-types";
import { ImageInterface } from "../components/@types/image.type";
import Image from 'next/image'

interface IndexInterface {
  home1Document: Document;
  home2Document: Document;
  homeImages: ImageInterface[];
}

export default function Index({
  home1Document,
  home2Document,
  homeImages,
}: IndexInterface) {
  return (
    <div className="Index">
      <div>
        <Image
          src={homeImages[0].url}
          alt={homeImages[0].fileName}
          width={1280}
          height={576}
        />
      </div>
      <div className="content">
        <Home1 document={home1Document} />
        <Home2 document={home2Document} images={homeImages} />
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  
  const data = await getAllEncart();
  console.log("data ", data);
  const res = await getImageById("E3JdmehOhCKbWajplfPuM");
  console.log("finish ,", await getImageByName("home-header"));
  console.log("finish ,", await getImageByName("home-section2-1"));
  console.log("finish ,", await getImageByName("home-section2-2"));
  console.log("++++++++++++++++++++++");
  console.log(
    "foundEncart : ",
    data.find((encart) => encart.title === "home-1")
  );
  console.log(
    "ALL : ",
    await getImagesByName(["home-section2-1", "home-section2-2"])
  );

  return {
    props: {
      rText: data,
      home1Document: data.find((encart) => encart.title === "home-1").rtext
        .json,
      home2Document: data.find((encart) => encart.title === "home-2").rtext
        .json,
      homeImages: await getImagesByName([
        "home-header",
        "home-section2-1",
        "home-section2-2",
      ]),
    },
    revalidate: 43200,
  };
}
