import { ImageInterface } from "../@types/image.type";
import { getImageIdByName } from "./api/imageIdConvertor.api";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getImageById = async (
  id: string
): Promise<ImageInterface | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const asset = await client.getAsset(id);
      console.log("==>ASSET+++", asset)
      // resolve('https://'+asset.fields.file.url)
      resolve({
        title:asset.fields.title,
        ...asset.fields.file,
        url: "https:" + asset.fields.file.url,
      });
    } catch (error) {
      reject(null);
    }
  });
};

export const getImageByName = async (name: string):Promise<ImageInterface|null> => {
  const imageId = await getImageIdByName(name);
  if(imageId){
      return await getImageById(imageId);
  }
  return null
};

export const getImagesByName = async (
  names: string[]
): Promise<Array<ImageInterface|null>> => {
  return await Promise.all(names.map((name) => getImageByName(name)));
};
