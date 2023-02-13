import Image from "next/image"
import { ImageInterface } from "../@types/image.type"

interface SubPageHeaderInterface{
    image: ImageInterface
}

const SubPageHeader = ({ image }: SubPageHeaderInterface) => {

  return (
    <div className="SubPageHeader">
        <div className="curtain pageCurtain"></div>
        {/* <Image className="headerImage" src={image.url} alt={image.title} width={1400} height={800}/> */}
        <div className="headerImage" style={{backgroundImage:`url("${image.url}")`}}/>
    </div>
  )
}

export default SubPageHeader

