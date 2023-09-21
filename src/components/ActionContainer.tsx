import { FunctionComponent } from "react";
import styles from "./ActionContainer.module.css";

const ActionContainer: FunctionComponent = () => {
  return (
    <div className={styles.gettingStartedAddActions}>
      <div className={styles.youCanAlso}>
        You can also add an action to your layer. Let’s try opening a video
        pop-up when the play icon is clicked.
      </div>
      <div className={styles.selectTheSmallPlayIconInParent}>
        <div className={styles.selectTheSmall}>
          Select the small play icon in the top right of the first card
        </div>
        <div className={styles.selectTheLayerParent}>
          <b className={styles.selectTheLayer}>Select the LAYER</b>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <b className={styles.b}>1</b>
          </div>
        </div>
      </div>
      <div className={styles.addingActionsParent}>
        <div className={styles.addingActions}>Adding Actions</div>
        <div className={styles.gettingStarted}>Getting Started</div>
      </div>
      <div className={styles.tagItAsAButtonAndGoToParent}>
        <div className={styles.selectTheSmall}>
          Tag it as a button, and go to the “Actions” tab. Select “Open pop-up”
        </div>
        <div className={styles.addOnclickActionParent}>
          <b className={styles.selectTheLayer}>Add Onclick Action</b>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <b className={styles.b}>2</b>
          </div>
        </div>
      </div>
      <div className={styles.group5}>
        <div className={styles.group}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle16.svg" />
          <div className={styles.group3}>
            <div className={styles.group1}>
              <div className={styles.actionsnormalCopy21}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle17.svg"
                />
                <div className={styles.scrollIntoView}>Scroll into view</div>
                <img
                  className={styles.actionscrollIntoViewIcon}
                  alt=""
                  src="/actionscrollintoview.svg"
                />
              </div>
              <div className={styles.actionsnormalCopy25}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle18.svg"
                />
                <div className={styles.closePopUp}>
                  <p className={styles.close}>Close</p>
                  <p className={styles.close}>pop-up</p>
                </div>
                <img
                  className={styles.actionscrollIntoViewIcon1}
                  alt=""
                  src="/actionscrollintoview1.svg"
                />
              </div>
              <div className={styles.actionsnormalCopy22}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle19.svg"
                />
                <div className={styles.changePage}>Change page</div>
                <img
                  className={styles.actionscrollIntoViewIcon2}
                  alt=""
                  src="/actionscrollintoview2.svg"
                />
              </div>
              <div className={styles.actionsnormalCopy23}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle20.svg"
                />
                <div className={styles.openUrlExternal}>
                  Open URL (External)
                </div>
                <img
                  className={styles.actionscrollIntoViewIcon3}
                  alt=""
                  src="/actionscrollintoview3.svg"
                />
              </div>
              <div className={styles.actionsnormalCopy24}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle21.svg"
                />
                <div className={styles.openPopUp}>Open pop-up</div>
                <img
                  className={styles.actionscrollIntoViewIcon4}
                  alt=""
                  src="/actionscrollintoview4.svg"
                />
              </div>
            </div>
            <div className={styles.chooseAction}>Choose Action</div>
          </div>
        </div>
        <div className={styles.group5Child} />
      </div>
      <div className={styles.chooseTheMatterhorn}>
        Choose the “Matterhorn Popup” for this icon.
      </div>
      <div className={styles.youWillNeedToLinkThePopParent}>
        <div className={styles.selectTheSmall}>
          You will need to link the pop-up that is in a different frame. You can
          choose from the dropdown, or use “Locate” to choose the right pop-up
        </div>
        <div className={styles.linkYourPopUpParent}>
          <b className={styles.linkYourPopUp}>Link your pop-up</b>
          <div className={styles.ellipseContainer}>
            <div className={styles.groupInner} />
            <b className={styles.b2}>3</b>
          </div>
        </div>
      </div>
      <div className={styles.perfectAreYou}>
        Perfect! Are you ready to see your design come to life? Head over to the
        next step!
      </div>
      <div className={styles.screenshot20220204At827Parent}>
        <img
          className={styles.screenshot20220204At827}
          alt=""
          src="/screenshot-20220204-at-827-1@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
        </div>
      </div>
      <img
        className={styles.screenshot20220204At831}
        alt=""
        src="/screenshot-20220204-at-831-1@2x.png"
      />
      <div className={styles.gettingStartedAddActionsChild} />
    </div>
  );
};

export default ActionContainer;
