import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TaggingContainer.module.css";

type TaggingContainerType = {
  taggingActionText?: string;
  additionalTaggingActionTe?: string;
  layersActionText?: string;
  preTaggedLayersActionText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const TaggingContainer: FunctionComponent<TaggingContainerType> = ({
  taggingActionText,
  additionalTaggingActionTe,
  layersActionText,
  preTaggedLayersActionText,
  propLeft,
  propLeft1,
  propLeft2,
  propWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const taggingStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const weveAlreadyPreTaggedStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth,
    };
  }, [propLeft2, propWidth]);

  return (
    <div className={styles.groupParent} style={groupDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.tagging} style={taggingStyle}>
          {taggingActionText}
        </div>
        <b className={styles.b}>{additionalTaggingActionTe}</b>
        <b className={styles.layers}>{layersActionText}</b>
      </div>
      <div
        className={styles.weveAlreadyPreTagged}
        style={weveAlreadyPreTaggedStyle}
      >
        {preTaggedLayersActionText}
      </div>
    </div>
  );
};

export default TaggingContainer;
