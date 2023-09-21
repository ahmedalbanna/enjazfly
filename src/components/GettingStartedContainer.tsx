import { FunctionComponent } from "react";
import styles from "./GettingStartedContainer.module.css";

const GettingStartedContainer: FunctionComponent = () => {
  return (
    <div className={styles.gettingStartedPreview}>
      <div className={styles.selectALayerContainer}>
        <span>{`Select a layer or a frame, and click the `}</span>
        <b>Preview</b>
        <span> button to see an interactive preview of your project.</span>
      </div>
      <div className={styles.youCanNowSeeHowYourProjeParent}>
        <div className={styles.youCanNow}>
          You can now see how your project behaves in different screen sizes.
          You also have the option to view your project on popular devices.
        </div>
        <div className={styles.viewProjectInDifferentScreParent}>
          <b className={styles.viewProjectIn}>
            View Project in different screen sizes
          </b>
          <img className={styles.groupChild} alt="" src="/group-2.svg" />
        </div>
        <div className={styles.previewParent}>
          <div className={styles.preview}>
            <div className={styles.devicesDropdown}>
              <div className={styles.devicesDropdown}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle22.svg"
                />
                <div className={styles.responsive}>Responsive</div>
                <div className={styles.group39}>
                  <div className={styles.motoG4}>Moto G4</div>
                  <div className={styles.galaxyS5}>Galaxy S5</div>
                  <div className={styles.pixel2}>Pixel 2</div>
                  <div className={styles.pixel2Xl}>Pixel 2 XL</div>
                  <div className={styles.iphone5se}>iPhone 5/SE</div>
                  <div className={styles.iphone678}>iPhone 6/7/8</div>
                  <div className={styles.iphone678Plus}>iPhone 6/7/8 Plus</div>
                  <div className={styles.iphoneX}>iPhone X</div>
                  <div className={styles.ipad}>iPad</div>
                  <div className={styles.ipadPro}>iPad Pro</div>
                  <div className={styles.surfaceDuo}>Surface Duo</div>
                  <div className={styles.galaxyFold}>Galaxy Fold</div>
                </div>
                <img className={styles.line2Icon} alt="" src="/line21.svg" />
                <img className={styles.groupIcon} alt="" src="/group12.svg" />
              </div>
            </div>
          </div>
          <div className={styles.group37}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="/rectangle23.svg"
            />
            <img
              className={styles.rectangleIcon2}
              alt=""
              src="/rectangle24.svg"
            />
            <img className={styles.group30Icon} alt="" src="/group30.svg" />
            <div className={styles.group34}>
              <div className={styles.group38}>
                <div className={styles.responsive1}>Responsive</div>
                <img className={styles.groupIcon1} alt="" src="/group13.svg" />
              </div>
              <div className={styles.group7}>
                <img
                  className={styles.screenscustomIcon}
                  alt=""
                  src="/screenscustom.svg"
                />
                <img className={styles.ovalIcon} alt="" src="/oval.svg" />
                <div className={styles.more}>More</div>
              </div>
              <div className={styles.group3}>
                <img
                  className={styles.screens1200Icon}
                  alt=""
                  src="/screens1200.svg"
                />
                <div className={styles.default}>Default</div>
              </div>
              <div className={styles.group6}>
                <img
                  className={styles.screens991Icon}
                  alt=""
                  src="/screens991.svg"
                />
                <div className={styles.div}>1200</div>
              </div>
              <div className={styles.group5}>
                <img
                  className={styles.screens767Icon}
                  alt=""
                  src="/screens767.svg"
                />
                <div className={styles.div1}>991</div>
              </div>
              <div className={styles.group4}>
                <img className={styles.groupIcon2} alt="" src="/group14.svg" />
                <div className={styles.div2}>479</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.youCanAlsoCheckOutTheIntParent}>
        <div className={styles.youCanAlsoContainer}>
          <p className={styles.youCanAlso}>
            You can also check out the interactions you have set, since the
            preview is running on live code!
          </p>
          <p className={styles.youCanAlso}>&nbsp;</p>
          <p className={styles.youCanAlso}>
            For this project, we’ve helped you to pre-tag other layers, so click
            around to try them out!
          </p>
        </div>
        <div className={styles.testOutTheInteractionsParent}>
          <b className={styles.viewProjectIn}>TEST OUT THE INTERACTIONS</b>
          <img className={styles.groupChild} alt="" src="/group-21.svg" />
        </div>
        <img
          className={styles.screenshot20220204At834}
          alt=""
          src="/screenshot-20220204-at-834-1@2x.png"
        />
      </div>
      <div className={styles.previewYourProjectParent}>
        <div className={styles.previewYourProject}>Preview your project</div>
        <div className={styles.gettingStarted}>Getting Started</div>
      </div>
      <div className={styles.gettingStartedPreviewChild} />
      <div className={styles.groupParent}>
        <div className={styles.duringPreviewYourProjectWWrapper}>
          <div className={styles.duringPreviewYour}>
            During preview, your project will be shown depending on how you
            tagged the layers, tweaked the behaviour and added actions. Untagged
            or untouched layers might not show properly on certain screen sizes.
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/line-1.svg" />
        <img className={styles.groupChild1} alt="" src="/group-25.svg" />
      </div>
    </div>
  );
};

export default GettingStartedContainer;
