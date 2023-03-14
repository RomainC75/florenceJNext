import Image from 'next/image'
import React from 'react'
import RichText from '../richText'
import { ImageInterface } from '../../@types/image.type'
import { Document } from '@contentful/rich-text-types'

interface Enseignement2Interface {
  document: Document
  image: ImageInterface
}

const Enseignement2 = ({
  document,
  image,
}: Enseignement2Interface): JSX.Element => {
  return (
    <section className="Enseignement2">
      <div className="text elegantRText">
        <RichText document={document} />
      </div>
      <div className="imageContainer">
        <Image src={image.url} alt={image.title} width={300} height={300} />
      </div>
    </section>
  )
}

export default Enseignement2
