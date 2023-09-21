import { FunctionComponent } from "react";
import styles from "./ContainerGettingStarted.module.css";

const ContainerGettingStarted: FunctionComponent = () => {
  return (
    <div className={styles.gettingStartedBehaviour}>
      <div className={styles.definingStylingLayoutsParent}>
        <div className={styles.definingStylingContainer}>
          <p className={styles.defining}>{`Defining `}</p>
          <p className={styles.defining}>{`Styling & Layouts`}</p>
        </div>
        <div className={styles.gettingStarted}>Getting Started</div>
      </div>
      <div
        className={styles.inTheStyling}
      >{`In the Styling & Layouts tab you can define how your layers look across different screen sizes, and different states.`}</div>
      <div className={styles.niceJobYouve}>
        Nice job! You’ve added a hover effect to your button!
      </div>
      <div className={styles.selectThePurpleViewFullGParent}>
        <div className={styles.selectThePurpleContainer}>
          <span>{`Select the purple “View full gallery” button on the design to the right and tag it as a `}</span>
          <b>Button</b>
          <span>.</span>
        </div>
        <div className={styles.selectTheLayerParent}>
          <b className={styles.selectTheLayer}>Select the LAYER</b>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <b className={styles.b}>1</b>
          </div>
        </div>
      </div>
      <div className={styles.youCanThen}>
        You can then tweak the animation settings as you like, and hit done.
      </div>
      <div className={styles.thenChooseThe}>
        Then, choose the “Shadow pop” animation
      </div>
      <div className={styles.gettingStartedBehaviourInner}>
        <div className={styles.nowLetsAddAHoverEffectParent}>
          <div
            className={styles.nowLetsAdd}
          >{`Now, let’s add a hover effect to this button. In the Styling & Layouts tab, click on the Hover tab. `}</div>
          <div className={styles.addHoverStateParent}>
            <b className={styles.selectTheLayer}>Add hover state</b>
            <div className={styles.ellipseParent}>
              <div className={styles.groupChild} />
              <b className={styles.b}>2</b>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <div className={styles.gettingStartedBehaviourChild} />
      <img
        className={styles.gettingStartedBehaviourItem}
        alt=""
        src="/group-751.svg"
      />
      <div className={styles.image16Parent}>
        <img className={styles.image16Icon1} alt="" src="/image-161@2x.png" />
        <div className={styles.groupInner} />
      </div>
    </div>
  );
};

export default ContainerGettingStarted;
