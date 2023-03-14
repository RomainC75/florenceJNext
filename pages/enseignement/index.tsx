import React from 'react'
import { getImagesByName } from '../../lib/contentfulImage'
import { getEncartOnPage } from '../../lib/api/text.api'
import SubPageHeader from '../../components/SubPageHeader'
import Enseignement1 from '../../components/sections/Enseignement1'
import Enseignement2 from '../../components/sections/Enseignement2'

const Enseignement = ({ headerImage, documents, images }) => {
  return (
    <div className="Enseignement">
      <SubPageHeader image={headerImage} h1="Enseignement" />
      <div className="content">
        <Enseignement1 document={documents[0]} image={images[0]} />
        <Enseignement2 document={documents[1]} image={images[1]} />
      </div>
    </div>
  )
}

export default Enseignement

export async function getStaticProps() {
  let images = await getImagesByName([
    'enseignement-header',
    'enseignement-1',
    'enseignement-qrCode',
    'bio-section4',
  ])
  const headerImage = images[0]
  images = images.slice(1)
  const encarts = (await getEncartOnPage('enseignement')).map(
    (encart) => encart.rtext.json
  )

  return {
    props: {
      headerImage,
      images,
      documents: encarts,
    },
    revalidate: 43200,
  }
}
