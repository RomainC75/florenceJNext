import React from 'react'
import { ImageInterface } from '../../@types/image.type'
import SubPageHeader from '../../components/SubPageHeader'
import { getImagesByName } from '../../lib/contentfulImage'
import Gallery from '../../components/Gallery'
import { getImageIdsAndNamesContaining } from '../../lib/api/imageIdConvertor.api'

interface ContactInterface {
  headerImage: ImageInterface
  oeuvreImages: ImageInterface[]
}

const Contact = ({ headerImage, oeuvreImages }: ContactInterface) => {
  console.log('oeurvres : ', oeuvreImages)
  return (
    <div className="ContactPage">
      <SubPageHeader image={headerImage} h1="Oeuvres" />
      <Gallery oeuvreImages={oeuvreImages} />
    </div>
  )
}

export default Contact

export async function getStaticProps() {
  //   const documents = (await getEncartOnPage("contact")).map(
  //     (encart) => encart.rtext.json
  //   );
  const [homeImage] = await getImagesByName(['oeuvres-header'])
  const images = await getImageIdsAndNamesContaining('oeuvre')
  const oeuvreImages = await getImagesByName(images.map((img) => img.name))

  const apiKey: string = process.env.GOOGLE_API_KEY
  return {
    props: {
      headerImage: homeImage,
      googleApiKey: apiKey,
      oeuvreImages,
    },
    revalidate: 43200,
  }
}
