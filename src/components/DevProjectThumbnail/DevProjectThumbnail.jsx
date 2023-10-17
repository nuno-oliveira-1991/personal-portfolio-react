import style from "./dev-thumbnail-styles.module.scss";

const DevProjectThumbnail = ({ image, name, type, link, description }) => {

  return (
    <div className={style['container']}>
      <img className={style['album-thumbnail']} src={image} />
      <div className={style['rollover']}>
        <h3>{name}</h3>
        <h5>{type}</h5>
        <p>{description}</p>
        <a href={link} target="_blank">Repository</a>
      </div>
    </div>
  )
};

export default DevProjectThumbnail;