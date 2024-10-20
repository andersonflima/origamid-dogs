import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.idade} anos</li>
            <li>{photo.peso} kg</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;
