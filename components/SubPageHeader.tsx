import { ImageInterface } from '../@types/image.type'

interface SubPageHeaderInterface {
  image: ImageInterface
  h1: string
}

const SubPageHeader = ({ image, h1 }: SubPageHeaderInterface) => {
  return (
    <div className="SubPageHeader">
      <div className="curtain pageCurtain"></div>
      {/* <Image className="headerImage" src={image.url} alt={image.title} width={1400} height={800}/> */}
      <h1 className="Didone">{h1}</h1>
      <div
        className="headerImage"
        style={{ backgroundImage: `url("${image.url}")` }}
      />
    </div>
  )
}

export default SubPageHeader
