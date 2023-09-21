import { FunctionComponent } from "react";
import styles from "./HotelsPageContainer.module.css";

const HotelsPageContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.homePage}>Home Page</div>
        <div className={styles.resultsPage}>Results Page</div>
        <div className={styles.popup}>Popup</div>
        <div className={styles.hotelsPage}>Hotels Page</div>
      </div>
      <img
        className={styles.screenshot20220302At735}
        alt=""
        src="/screenshot-20220302-at-735-1@2x.png"
      />
      <div className={styles.ellipseDiv} />
    </div>
  );
};

export default HotelsPageContainer;
