import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelCardForm.module.css";

type HotelCardFormType = {
  hotelImageUrl?: string;
  hotelName?: string;
  hotelPrice?: string;
  hotelReviews?: string;
  hotelRating?: string;
  hotelLocation?: string;
  hotelDimensions?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const HotelCardForm: FunctionComponent<HotelCardFormType> = ({
  hotelImageUrl,
  hotelName,
  hotelPrice,
  hotelReviews,
  hotelRating,
  hotelLocation,
  hotelDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard1}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            alt=""
            src={hotelImageUrl}
          />
          <div className={styles.stayDetails} style={stayDetailsStyle}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>{hotelName}</div>
              <b className={styles.matterhornSuites}>{hotelPrice}</b>
              <div className={styles.night}>{hotelReviews}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video3.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews}>{hotelRating}</div>
            <div className={styles.parent}>
              <div className={styles.div}>{hotelLocation}</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src={hotelDimensions}
                style={vectorIcon1Style}
              />
            </div>
          </div>
          <button className={styles.moreDetailsButton}>
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCardForm;
