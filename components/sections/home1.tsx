import React,{useState, useEffect} from "react";
import RichText from "../richText";
import AnimatedHeader from "../AnimatedHeader";

const Home1 = ({ document }): JSX.Element => {

  const [YPosition, setYPosition] = useState<number>(0) 

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setYPosition(window.pageYOffset)
    })
  })

  console.log("document : ", document);
  return (
    <section className={`Home1 ${YPosition>500 ? 'dispSect' : 'hideSect'}`}>
      <div className="textAnimation">
        {/* <h2 className="Didone">
        <p>Démarche Artistique</p>
          <p>Démarche Artistique</p>
        </h2> */}
        <AnimatedHeader title="Démarche Artistique" classes={['Didone']}/>
      </div>
      <div className="text elegantRText">
        <RichText document={document}  />
      </div>
    </section>
  );
};

export default Home1;
