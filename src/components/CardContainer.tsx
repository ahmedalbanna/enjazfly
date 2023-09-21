import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  hotelName?: string;
  hotelDescription?: string;
  roomType?: string;
  hotelReviews?: string;
  hotelRating?: string;
  hotelPrice?: string;
  roomPrice?: string;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  hotelName,
  hotelDescription,
  roomType,
  hotelReviews,
  hotelRating,
  hotelPrice,
  roomPrice,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={hotelName} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.result}>
            <b className={styles.freehandLosAngeles}>{hotelDescription}</b>
            <div className={styles.bedInQuad}>{roomType}</div>
            <div className={styles.review}>
              <div className={styles.reviews}>{hotelReviews}</div>
              <div className={styles.stars}>
                <div className={styles.div}>{hotelRating}</div>
                <img className={styles.vectorIcon} alt="" src={hotelPrice} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{roomPrice}</b>
            <div className={styles.night}>/night</div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonWidth="164px"
            primaryButtonHeight="46px"
            primaryButtonPosition="absolute"
            primaryButtonTop="37.58px"
            primaryButtonLeft="0.49px"
            primaryButtonCursor="unset"
            primaryButtonBorder="unset"
            primaryButtonPadding="unset"
            primaryButtonBackgroundColor="unset"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
