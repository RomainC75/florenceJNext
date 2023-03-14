import React from 'react'
import { ImageInterface } from '../../@types/image.type'
import SubPageHeader from '../../components/SubPageHeader'
import { getImagesByName } from '../../lib/contentfulImage'
import MyGoogleMap2 from '../../components/MyGoogleMap2'
import { BsInstagram, BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'

interface ContactInterface {
  headerImage: ImageInterface
  googleApiKey: string
}

const Contact = ({ headerImage, googleApiKey }: ContactInterface) => {
  return (
    <div className="ContactPage">
      <SubPageHeader image={headerImage} h1="Contact" />
      <div className="content">
        !
        <section className="sectionContact">
          <div className="adress">
            <div className="adress__details">
              <p className="italic"> Adresse : </p>
              <p>
                <strong>9 Av. Victor Hugo</strong>
              </p>
              <p>
                <strong>78400 Chatou</strong>
              </p>
              <p>En semaine entre 9h et 17h au :</p>
              <p>
                <strong>06.22.69.66.96</strong>
              </p>
            </div>

            <div>
              <p className="italic">Et sur les réseaux sociaux :</p>
              <div className="socials">
                <Link href="#">
                  <div>
                    <BsInstagram className="logo" />
                  </div>
                </Link>
                <Link href="#">
                  <div>
                    <BsFacebook className="logo" />
                  </div>
                </Link>
                <Link href="#">
                  <div>
                    <BsPinterest className="logo" />
                  </div>
                </Link>
                <Link href="#">
                  <div>
                    <BsYoutube className="logo" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <MyGoogleMap apiKey={googleApiKey}/> */}
          <MyGoogleMap2 apiKey={googleApiKey} />
          {/* <div className="mapouter"><div className="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=9%20Av.%20Victor%20Hugo,%2078400%20Chatou&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}</style><a href="https://www.embedgooglemap.net">google map html widget</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div></div> */}
        </section>
      </div>
    </div>
  )
}

export default Contact

export async function getStaticProps() {
  const [homeImage] = await getImagesByName(['contact-header'])
  const apiKey = process.env.GOOGLE_API_KEY
  console.log('contact images : ', homeImage)
  console.log('==> apiKey : ', apiKey)
  return {
    props: {
      headerImage: homeImage,
      googleApiKey: apiKey,
    },
    revalidate: 43200,
  }
}
