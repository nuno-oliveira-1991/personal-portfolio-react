import { v4 as uuidv4 } from 'uuid';
import AlbumThumbnail from "./../../components/AlbumThumbnail/AlbumThumbnail";
import style from "./music-styles.module.scss";
import { mainDiscography, otherWorks } from "../../constants";

const Music = () => {

  return (
    <div className={style['container']}>
      <div className={style['album-board']}>
        {mainDiscography.map((album) => (
          <AlbumThumbnail 
            key={uuidv4()}
            name={album.albumName}
            image={album.albumImage}
            artist={album.albumArtist}
            link={album.albumLink}
          />
        ))}
      </div> 
      <h2>Other Works</h2>
      <div className={style['album-board']}>
        {otherWorks.map((album) => (
          <AlbumThumbnail 
            key={uuidv4()}
            name={album.albumName}
            image={album.albumImage}
            artist={album.albumArtist}
            link={album.albumLink}
            type={album.albumType}
            featuredAs={album.featuredAs}
          />
        ))}
      </div>
    </div>
  )
};

export default Music;