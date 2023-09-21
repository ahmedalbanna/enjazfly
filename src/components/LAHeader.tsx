import { FunctionComponent } from "react";
import Pilldefault from "./Pilldefault";
import styles from "./LAHeader.module.css";

const LAHeader: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner-background1@2x.png"
        />
        <div className={styles.title}>
          <div className={styles.staysInLos}>Stays in Los Angeles</div>
          <div className={styles.options}>
            <Pilldefault
              beds="Recommended"
              pilldefaultBackgroundColor="#fff"
              bedsColor="#1262af"
            />
            <Pilldefault
              beds="Price"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
            <Pilldefault
              beds="Rating"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LAHeader;
