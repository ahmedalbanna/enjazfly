import { FunctionComponent } from "react";
import styles from "./HotelCardForm1.module.css";

type HotelCardForm1Type = {
  propertyDimensions?: string;
  accommodationType?: string;
  hotelName?: string;
  pricePerNight?: string;
  imageDimensions?: string;
  reviewCount?: string;
  rating?: string;
  carDimensionsOriginalProp?: string;
};

const HotelCardForm1: FunctionComponent<HotelCardForm1Type> = ({
  propertyDimensions,
  accommodationType,
  hotelName,
  pricePerNight,
  imageDimensions,
  reviewCount,
  rating,
  carDimensionsOriginalProp,
}) => {
  return (
    <div className={styles.hotelCard1}>
      <a className={styles.hotelCard}>
        <img
          className={styles.unsplashhhrfsdwxxusIcon}
          alt=""
          src={propertyDimensions}
        />
        <div className={styles.stayDetails}>
          <div className={styles.entireBungalowParent}>
            <div className={styles.entireBungalow}>{accommodationType}</div>
            <b className={styles.matterhornSuites}>{hotelName}</b>
            <div className={styles.night}>{pricePerNight}</div>
          </div>
          <img className={styles.videoIcon} alt="" src={imageDimensions} />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviewCount}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{rating}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={carDimensionsOriginalProp}
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

export default HotelCardForm1;
