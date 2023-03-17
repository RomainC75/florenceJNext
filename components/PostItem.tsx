import React from 'react'
import { PostInterface } from '../@types/post.type'
import Image from 'next/image'
import { displayDate } from '../utils/date.utils'
import RichText from './richText'
import Link from 'next/link'

interface PostItem {
  post: PostInterface
}

const PostItem = ({ post }: PostItem): JSX.Element => {
  const mainImage = post.imagesCollection.items[0]
  console.log('CONTENT : ', post.content)
  return (
    <Link href={`/actualite/${post.sys.id}`}>
      <li className="PostItem">
        <div className="image">
          <Image
            src={mainImage.url}
            alt={mainImage.title}
            width={300}
            height={300}
          />
        </div>
        <h3>{post.title}</h3>
        <p>{displayDate(post.date)}</p>
        <div className="text">
          <RichText document={post.content.json} />
        </div>
      </li>
    </Link>
  )
}

export default PostItem
