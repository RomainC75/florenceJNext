import Image from 'next/image'
import React from 'react'
import RichText from '../richText'
import { ImageInterface } from '../../@types/image.type'
import { Document } from '@contentful/rich-text-types'

interface Enseignement1Interface {
  document: Document
  image: ImageInterface
}

const Enseignement1 = ({
  document,
  image,
}: Enseignement1Interface): JSX.Element => {
  console.log('document : ', document)
  return (
    <section className="Enseignement1">
      <div className="text elegantRText">
        <RichText document={document} />
      </div>
      <div className="imageContainer">
        <Image src={image.url} alt={image.title} width={300} height={300} />
      </div>
    </section>
  )
}

export default Enseignement1
