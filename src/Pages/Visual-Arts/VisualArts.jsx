import { v4 as uuidv4 } from 'uuid';
import style from "./visual-arts-styles.module.scss";
import { visualArtsImages } from "../../constants";

const VisualArts = () => {

  return (
    <div className={style['container']}>
      {visualArtsImages.map((image) => (
        <img 
          key={uuidv4()}
          src={image.image} 
        />
      ))}
    </div>
  )
};

export default VisualArts;