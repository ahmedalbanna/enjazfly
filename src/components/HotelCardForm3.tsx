import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HotelCardForm3.module.css";

type HotelCardForm3Type = {
  roomDimensions?: string;
  accommodationType?: string;
  accommodationName?: string;
  pricePerNight?: string;
  reviewCount?: string;
  rating?: string;
  imageDimensions?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const HotelCardForm3: FunctionComponent<HotelCardForm3Type> = ({
  roomDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  reviewCount,
  rating,
  imageDimensions,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard}>
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={roomDimensions}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>
              {accommodationType}
            </div>
            <b className={styles.discoveryShores}>{accommodationName}</b>
            <div className={styles.night}>{pricePerNight}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviewCount}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{rating}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={imageDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm3;
