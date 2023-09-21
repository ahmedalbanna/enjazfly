import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonType = {
  searchFlights?: string;

  /** Style props */
  primaryButtonWidth?: CSSProperties["width"];
  primaryButtonHeight?: CSSProperties["height"];
  primaryButtonPosition?: CSSProperties["position"];
  primaryButtonTop?: CSSProperties["top"];
  primaryButtonLeft?: CSSProperties["left"];
  primaryButtonCursor?: CSSProperties["cursor"];
  primaryButtonBorder?: CSSProperties["border"];
  primaryButtonPadding?: CSSProperties["padding"];
  primaryButtonBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  searchFlightsLeft?: CSSProperties["left"];
  searchFlightsDisplay?: CSSProperties["display"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  searchFlights,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  rectangleDivBackgroundColor,
  searchFlightsLeft,
  searchFlightsDisplay,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      position: primaryButtonPosition,
      top: primaryButtonTop,
      left: primaryButtonLeft,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
    };
  }, [
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const searchFlightsStyle: CSSProperties = useMemo(() => {
    return {
      left: searchFlightsLeft,
      display: searchFlightsDisplay,
    };
  }, [searchFlightsLeft, searchFlightsDisplay]);

  return (
    <div className={styles.primaryButton} style={primaryButtonStyle}>
      <div className={styles.primaryButtonChild} style={rectangleDivStyle} />
      <div className={styles.searchFlights} style={searchFlightsStyle}>
        {searchFlights}
      </div>
    </div>
  );
};

export default PrimaryButton;
