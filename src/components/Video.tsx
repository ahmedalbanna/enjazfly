import { FunctionComponent } from "react";
import styles from "./Video.module.css";

const Video: FunctionComponent = () => {
  return (
    <div className={styles.video}>
      <img className={styles.groupIcon} alt="" src="/group16.svg" />
    </div>
  );
};

export default Video;
