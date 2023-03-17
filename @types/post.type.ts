import { Document } from '@contentful/rich-text-types'

export interface PostInterface {
  content: {
    json: Document
  }
  date: Date
  imagesCollection: {
    items: ImageInterface
  }
  tags: string
  title: string
  sys: {
    id: string
  }
}

interface ImageInterface {
  url: string
  title?: string
}
