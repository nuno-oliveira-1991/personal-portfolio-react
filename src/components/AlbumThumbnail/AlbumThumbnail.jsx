import style from "./album-thumbnail-styles.module.scss";

const AlbumThumbnail = ({ image, name, artist, link, type, featuredAs }) => {

  return (
    <div className={style['container']}>
      <img className={style['album-thumbnail']} src={image} />
      <div className={style['rollover']}>
        <h3>{name}</h3>
        <h4>{artist}</h4>
        {type && <h6>{type}</h6>}
        {featuredAs && <h6>{featuredAs}</h6>}
        <a href={link} target="_blank">Listen Here</a>
      </div>
    </div>
  )
};

export default AlbumThumbnail;