import React from 'react'
import { PostInterface } from '../../@types/post.type'
import { getPosts } from '../../lib/api/post'
import SubPageHeader from '../../components/SubPageHeader'
import { getImagesByName } from '../../lib/contentfulImage'
import { ImageInterface } from '../../@types/image.type'

interface ActualiteInterface {
  posts: PostInterface
  headerImage: ImageInterface
}

const Actualite = ({ posts, headerImage }: ActualiteInterface): JSX.Element => {
  return (
    <div className="Actualite">
      <SubPageHeader image={headerImage} h1="Actualité" />
    </div>
  )
}

export default Actualite

export async function getStaticProps() {
  const posts = await getPosts()
  const [headerImage] = await getImagesByName(['actualite-header'])
  return {
    props: {
      posts,
      headerImage,
    },
    revalidate: 43200,
  }
}
