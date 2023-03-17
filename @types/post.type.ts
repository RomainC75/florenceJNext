import { Document } from '@contentful/rich-text-types'
import { ImageInterface } from './image.type'

export interface PostInterface {
  content: {
    json: Document
  }
  date: Date
  imagesCollection: {
    items: ImageInterface[]
  }
  tags: string
  title: string
  sys: {
    id: string
  }
}
