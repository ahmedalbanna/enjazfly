import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VideoIcon.module.css";

type VideoIconType = {
  videoIconVideo?: string;

  /** Style props */
  videoIconWidth?: CSSProperties["width"];
  videoIconHeight?: CSSProperties["height"];
  videoIconPosition?: CSSProperties["position"];
  videoIconTop?: CSSProperties["top"];
  videoIconLeft?: CSSProperties["left"];
};

const VideoIcon: FunctionComponent<VideoIconType> = ({
  videoIconVideo,
  videoIconWidth,
  videoIconHeight,
  videoIconPosition,
  videoIconTop,
  videoIconLeft,
}) => {
  const videoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: videoIconWidth,
      height: videoIconHeight,
      position: videoIconPosition,
      top: videoIconTop,
      left: videoIconLeft,
    };
  }, [
    videoIconWidth,
    videoIconHeight,
    videoIconPosition,
    videoIconTop,
    videoIconLeft,
  ]);

  return (
    <img
      className={styles.videoIcon}
      alt=""
      src={videoIconVideo}
      style={videoIconStyle}
    />
  );
};

export default VideoIcon;
