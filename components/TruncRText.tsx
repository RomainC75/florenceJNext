import React from 'react'

interface TruncRTextInterface {
  children: JSX.Element
}

const TruncRText = ({ children }: TruncRTextInterface) => {
  console.log('CHILDREN', children)
  return <div>{children}</div>
}

export default TruncRText
