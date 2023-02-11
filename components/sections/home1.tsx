import React,{useState, useEffect} from "react";
import RichText from "../richText";

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
      <h2 className="Didone">Démarche Artistique</h2>
      <div className="text elegantRText">
        <RichText document={document} />
      </div>
    </section>
  );
};

export default Home1;
