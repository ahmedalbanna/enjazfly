import { FunctionComponent } from "react";
import styles from "./AirportDropdownContainer.module.css";

const AirportDropdownContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
      <div className={styles.groupItem} />
      <div className={styles.homePage}>Home Page</div>
      <div className={styles.fullBookingScreen}>Full Booking Screen</div>
      <div className={styles.airportDropdown}>Airport Dropdown</div>
      <div className={styles.groupInner} />
      <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
    </div>
  );
};

export default AirportDropdownContainer;
