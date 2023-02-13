import React from 'react'

interface AnimatedHeaderInterface{
    title: string;
    classes?: string[];
}

const AnimatedHeader = ({title, classes}:AnimatedHeaderInterface) => {

  return (
    <div className={`AnimatedHeader ${ classes && classes.map( classe=>classe).join(' ') }`}>
        <h2>{title}</h2>
        <p>{title}</p>
        <p>{title}</p>
    </div>
  )
}

export default AnimatedHeader