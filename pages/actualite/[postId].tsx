import React from 'react'
import { PostInterface } from '../../@types/post.type'
import { getPosts, getPostById } from '../../lib/api/post'
import { getImagesByName } from '../../lib/contentfulImage'
import SubPageHeader from '../../components/SubPageHeader'
import { ImageInterface } from '../../@types/image.type'
import Gallery from '../../components/Gallery'
import { displayDate } from '../../utils/date.utils'
import RichText from '../../components/richText'

interface ActualiteDetailsInterface {
  foundPost: PostInterface
  headerImage: ImageInterface
}

const ActualiteDetails = ({
  foundPost,
  headerImage,
}: ActualiteDetailsInterface): JSX.Element => {
  console.log('===>', foundPost.imagesCollection.items)
  return (
    <div>
      <SubPageHeader image={headerImage} h1={`${foundPost.title}`} />
      <div className="details">
        <Gallery oeuvreImages={foundPost.imagesCollection.items} />
        <p>{displayDate(foundPost.date)}</p>
        <RichText document={foundPost.content.json} />
        <p>{foundPost.tags}</p>
      </div>
    </div>
  )
}

export default ActualiteDetails

export async function getStaticProps(context) {
  const { params } = context
  const foundPost: PostInterface = await getPostById(params.postId)
  const [headerImage] = await getImagesByName(['actualite-header'])
  return {
    props: {
      foundPost,
      headerImage,
    },
  }
}

export async function getStaticPaths() {
  try {
    const posts: PostInterface[] = await getPosts()
    const ids = posts.map((event: PostInterface) => ({
      params: { postId: event.sys.id },
    }))
    return {
      paths: ids,
      fallback: false,
    }
  } catch (error) {
    console.log('==getStaticPaths error==')
    console.log(error)
  }
}
