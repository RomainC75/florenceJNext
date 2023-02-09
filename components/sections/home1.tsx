import React from 'react'
import RichText from '../richText'

const Home1 = ({document}):JSX.Element => {
    console.log('document : ', document)
  return (
    <section>
        <h2>Démarch Artistique</h2>
        <RichText document={document}/>
    </section>
  )
}

export default Home1