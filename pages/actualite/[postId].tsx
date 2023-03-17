import React from 'react'
import { PostInterface } from '../../@types/post.type'
import { getPosts, getPostById } from '../../lib/api/post'

interface ActualiteDetailsInterface {
  foundPost: PostInterface
}

const ActualiteDetails = ({ foundPost }: ActualiteDetailsInterface) => {
  return (
    <div>
      {foundPost.sys.id} {foundPost.title}
    </div>
  )
}

export default ActualiteDetails

export async function getStaticProps(context) {
  const { params } = context
  const foundPost = await getPostById(params.postId)
  console.log('====>, params : ', params, '===', foundPost)
  console.log('===========FOUND ===========')
  console.log(foundPost)
  return {
    props: {
      foundPost,
    },
  }
}

export async function getStaticPaths() {
  try {
    const posts: PostInterface[] = await getPosts()
    const ids = posts.map((event: PostInterface) => ({
      params: { postId: event.sys.id },
    }))
    console.log('==> ids : ', ids)
    return {
      paths: ids,
      fallback: false,
    }
  } catch (error) {
    console.log('==getStaticPaths error==')
    console.log(error)
  }
}
