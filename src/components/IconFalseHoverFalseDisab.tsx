import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IconFalseHoverFalseDisab.module.css";

type IconFalseHoverFalseDisabType = {
  option?: string;

  /** Style props */
  iconFalseHoverFalseDisabWidth?: CSSProperties["width"];
  iconFalseHoverFalseDisabHeight?: CSSProperties["height"];
  iconFalseHoverFalseDisabAlignSelf?: CSSProperties["alignSelf"];
};

const IconFalseHoverFalseDisab: FunctionComponent<
  IconFalseHoverFalseDisabType
> = ({
  option,
  iconFalseHoverFalseDisabWidth,
  iconFalseHoverFalseDisabHeight,
  iconFalseHoverFalseDisabAlignSelf,
}) => {
  const iconFalseHoverFalseDisabStyle: CSSProperties = useMemo(() => {
    return {
      width: iconFalseHoverFalseDisabWidth,
      height: iconFalseHoverFalseDisabHeight,
      alignSelf: iconFalseHoverFalseDisabAlignSelf,
    };
  }, [
    iconFalseHoverFalseDisabWidth,
    iconFalseHoverFalseDisabHeight,
    iconFalseHoverFalseDisabAlignSelf,
  ]);

  return (
    <div
      className={styles.iconfalseHoverfalseDisab}
      style={iconFalseHoverFalseDisabStyle}
    >
      <div className={styles.option}>{option}</div>
    </div>
  );
};

export default IconFalseHoverFalseDisab;
