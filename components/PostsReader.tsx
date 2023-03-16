import React from 'react'
import { PostInterface } from '../@types/post.type'

interface PostItem {
  post: PostInterface
}

const PostItem = ({ post }: PostItem): JSX.Element => {
  return <div className="PostItem">{post.title}</div>
}

export default PostItem
