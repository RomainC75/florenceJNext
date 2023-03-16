import { ImageInterface } from '../@types/image.type'
import { getImageIdByName } from './api/imageIdConvertor.api'

import * as contentful from 'contentful'
// const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getImageById = async (
  id: string
): Promise<ImageInterface | null> => {
  return new Promise((resolve, reject) => {
    client
      .getAsset(id)
      .then((asset: contentful.Asset) => {
        console.log('assest = >', asset)
        const image: ImageInterface = {
          title: asset.fields.title,
          ...asset.fields.file,
          url: 'https:' + asset.fields.file.url,
        }
        resolve(image)
      })
      .catch(() => {
        reject(null)
      })
  })
}

export const getImageByName = async (
  name: string
): Promise<ImageInterface | null> => {
  const imageId = await getImageIdByName(name)
  if (imageId) {
    return await getImageById(imageId)
  }
  return null
}

export const getImagesByName = async (
  names: string[]
): Promise<Array<ImageInterface | null>> => {
  return await Promise.all(names.map((name) => getImageByName(name)))
}
