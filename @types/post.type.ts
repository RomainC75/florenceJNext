export interface PostInterface {
  content: Document
  date: Date
  imagesCollection: {
    items: ImageInterface
  }
  tags: string
  title: string
}

interface ImageInterface {
  url: string
}
