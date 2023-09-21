import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VariantContainedSizeLarge.module.css";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargeBoxSizing?: CSSProperties["boxSizing"];
  variantContainedSizeLargePadding?: CSSProperties["padding"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonLineHeight?: CSSProperties["lineHeight"];
};

const VariantContainedSizeLarge: FunctionComponent<
  VariantContainedSizeLargeType
> = ({
  button,
  variantContainedSizeLargeBoxSizing,
  variantContainedSizeLargePadding,
  buttonColor,
  buttonDisplay,
  buttonFontSize,
  buttonLineHeight,
}) => {
  const variantContainedSizeLargeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
      padding: variantContainedSizeLargePadding,
    };
  }, [variantContainedSizeLargeBoxSizing, variantContainedSizeLargePadding]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
    };
  }, [buttonColor, buttonDisplay, buttonFontSize, buttonLineHeight]);

  return (
    <div
      className={styles.variantcontainedSizelarge}
      style={variantContainedSizeLargeStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
