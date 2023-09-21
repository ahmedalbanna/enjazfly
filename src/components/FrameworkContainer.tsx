import { FunctionComponent } from "react";
import styles from "./FrameworkContainer.module.css";

const FrameworkContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.chooseAStartingFrameAndChParent}>
        <div className={styles.chooseAStarting}>
          Choose a Starting Frame and change your Framework settings. Then hit
          “Sync to Builder”.
        </div>
        <div className={styles.syncToLocofyBuilderParent}>
          <b className={styles.syncToLocofy}>Sync to LOCOFY builder</b>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <b className={styles.b}>2</b>
          </div>
        </div>
      </div>
      <div className={styles.groupItem} />
      <div className={styles.screenshot20220302At536Parent}>
        <img
          className={styles.screenshot20220302At536}
          alt=""
          src="/screenshot-20220302-at-536-1@2x.png"
        />
        <div className={styles.groupInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.rectangleDiv} />
        <div className={styles.framesSelected}>3 frames selected</div>
      </div>
    </div>
  );
};

export default FrameworkContainer;
