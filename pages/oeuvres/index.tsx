import React from 'react'
import { ImageInterface } from '../../@types/image.type'
import SubPageHeader from '../../components/SubPageHeader'
import { getImagesByName } from '../../lib/contentfulImage'
import MyGoogleMap2 from '../../components/MyGoogleMap2'
import { BsInstagram, BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'
import Gallery from '../../components/Gallery'
import { getImageIdsAndNamesContaining } from '../../lib/api/imageIdConvertor.api'

interface ContactInterface {
  headerImage: ImageInterface
  googleApiKey: string
}

const Contact = ({
  headerImage,
  googleApiKey,
  oeuvreImages,
}: ContactInterface) => {
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

  const apiKey = process.env.GOOGLE_API_KEY
  console.log('contact images : ', homeImage)
  console.log('==> apiKey : ', apiKey)
  return {
    props: {
      headerImage: homeImage,
      googleApiKey: apiKey,
      oeuvreImages,
    },
    revalidate: 43200,
  }
}
