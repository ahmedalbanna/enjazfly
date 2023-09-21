import { FunctionComponent } from "react";
import styles from "./BuilderContainer.module.css";

const BuilderContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-776.svg" />
      <div className={styles.inTheBuilder}>
        In the Builder, you can make and reuse components. You can also add
        props for dynamic content.
      </div>
      <div className={styles.makeComponentsParent}>
        <b className={styles.makeComponents}>Make components</b>
        <div className={styles.ellipseParent}>
          <div className={styles.groupItem} />
          <b className={styles.b}>2</b>
        </div>
      </div>
    </div>
  );
};

export default BuilderContainer;
