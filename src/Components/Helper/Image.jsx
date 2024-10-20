import React from "react";
import styles from "./Image.module.css";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <div className={styles.image}>
      {skeleton && <div className={`${styles.skeleton} ${styles.skeleton}`} />}
      <img onLoad={handleLoad} alt={alt} {...props} />
    </div>
  );
};

export default Image;
