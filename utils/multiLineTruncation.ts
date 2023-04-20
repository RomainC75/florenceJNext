import { Document } from '@contentful/rich-text-types'

// const truncation = (text: Document, length: number): Document => {
//   console.log('===================')
//   console.log(text, length)
//   //   let count = 0
//   const newContent = text.content[0].content.map((part) => {
//     console.log('part : ', part)
//   })
//   console.log('OUT : ', newContent)

//   return text
// }

const truncation = (text: Document, length: number): Document => {
  console.log('===================')
  console.log(text)
  let count = 0
  const newContent = text.content[0].content.map((part) => {
    console.log('===>', part)
    let newValue = ''
    if ('value' in part) {
      newValue = Array.from(part.value).reduce((accu, current) => {
        console.log('x Letter : ', current)
        if (count < length) {
          console.log('<===')
          count++
          return accu + current
        }
      }, '')
      return { ...part, value: newValue }
    }
    return part
  })
  console.log('NEW contennt : ', newContent)
  text.content[0].content = newContent

  return text
}

export default truncation
