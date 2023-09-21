import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardForm from "./HotelCardForm";
import styles from "./PopularStaysContainer.module.css";

const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright10.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardForm
          hotelImageUrl="/matterhorn-suites-image@2x.png"
          hotelName="Entire bungalow"
          hotelPrice="Matterhorn Suites"
          hotelReviews="$575/night"
          hotelRating="(60 reviews)"
          hotelLocation="4.9"
          hotelDimensions="/vector8.svg"
        />
        <HotelCardForm
          hotelImageUrl="/discovery-shores-image@2x.png"
          hotelName="2-Story beachfront suite"
          hotelPrice="Discovery Shores"
          hotelReviews="$360/night"
          hotelRating="(116 reviews)"
          hotelLocation="4.8"
          hotelDimensions="/vector9.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardForm
          hotelImageUrl="/arctic-hut-image@2x.png"
          hotelName="Single deluxe hut"
          hotelPrice="Arctic Hut "
          hotelReviews="$420/night"
          hotelRating="(78 reviews)"
          hotelLocation="4.7"
          hotelDimensions="/vector10.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm
          hotelImageUrl="/lake-louise-image@2x.png"
          hotelName="Deluxe King Room"
          hotelPrice="Lake Louise Inn"
          hotelReviews="$244/night"
          hotelRating="(63 reviews)"
          hotelLocation="4.6"
          hotelDimensions="/vector11.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright11.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
