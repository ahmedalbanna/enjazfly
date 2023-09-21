import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import FormContainer from "../components/FormContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightSectionContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <FormContainer
        imageResolution="/subscribe-section-background@2x.png"
        dimensionCode="/logo2.svg"
        imageCode="/social-icons2.svg"
      />
    </div>
  );
};

export default Homepage;
