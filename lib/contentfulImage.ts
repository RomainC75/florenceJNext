import { ImageInterface } from '../@types/image.type'
import { getImageIdByName } from './api/imageIdConvertor.api'

const contentful = require('contentful')


const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getImageById = async (id:string):Promise<ImageInterface|null> =>{
    console.log('=======> ', process.env.CONTENTFUL_ACCESS_TOKEN)
    return new Promise(async (resolve, reject)=>{
        try {
            const asset = await client.getAsset(id)
            // resolve('https://'+asset.fields.file.url)
            resolve({
                ...asset.fields.file,
                url:'https:'+asset.fields.file.url
            })
        } catch (error) {
            console.log('contentfulImage', error)
            reject(null)
        }
    })
}

export const getImageByName = async (name)=>{
    const imageId = await getImageIdByName(name)
    return await getImageById(imageId)
} 

export const getImagesByName = async(names: string[])=>{
    const urls = await Promise.all( names.map(name=>getImageByName(name)))
    return urls
}