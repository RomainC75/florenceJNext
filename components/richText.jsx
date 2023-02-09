import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}<strong>`
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`
    }
  }

const RichText = ({document})=> {
    // console.log('===>',documentToHtmlString(document, options))
  return (
    <div className="rText">
        {documentToReactComponents(document)}        
    </div>
  )
}

export default RichText