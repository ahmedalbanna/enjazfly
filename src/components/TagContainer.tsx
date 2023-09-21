import { FunctionComponent } from "react";
import TaggingContainer from "./TaggingContainer";
import styles from "./TagContainer.module.css";

const TagContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <TaggingContainer
        taggingActionText="Tagging"
        additionalTaggingActionTe="3"
        layersActionText="Layers"
        preTaggedLayersActionText="(We’ve already pre-tagged 12 other layers for you)"
      />
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.editing}>Editing</div>
          <b className={styles.b}>1</b>
          <b className={styles.property}>property</b>
        </div>
        <div className={styles.inTheStylingContainer}>
          <p className={styles.inTheStyling}>{`In the Styling & `}</p>
          <p className={styles.inTheStyling}>Layouts tab</p>
        </div>
      </div>
      <TaggingContainer
        taggingActionText="Adding"
        additionalTaggingActionTe="1"
        layersActionText="Action"
        preTaggedLayersActionText="In the Actions tab"
        propLeft="1130px"
        propLeft1="187px"
        propLeft2="93.15px"
        propWidth="313.7px"
      />
      <div className={styles.groupWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.gettingLivePreviewContainer}>
            <p className={styles.inTheStyling}>Getting</p>
            <p className={styles.livePreview}>Live preview</p>
          </b>
        </div>
      </div>
      <div className={styles.groupFrame}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.exportingCode}>
            <span>Exporting</span>
            <span className={styles.code}> code</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default TagContainer;
