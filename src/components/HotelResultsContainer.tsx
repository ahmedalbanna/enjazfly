import { FunctionComponent } from "react";
import ResultsCardContainer from "./ResultsCardContainer";
import CardContainer from "./CardContainer";
import styles from "./HotelResultsContainer.module.css";

const HotelResultsContainer: FunctionComponent = () => {
  return (
    <div className={styles.hotelResults}>
      <div className={styles.resultsSumamry}>
        <div className={styles.results}>200+ results</div>
        <div className={styles.filters}>
          <img className={styles.filtersIcon} alt="" src="/filters.svg" />
          <div className={styles.filters1}>Filters</div>
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultCardsCol}>
          <ResultsCardContainer
            roomType="/results-image@2x.png"
            roomDescription="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            roomPrice="/vector12.svg"
            roomSize="/video5.svg"
          />
          <CardContainer
            hotelName="/results-image1@2x.png"
            hotelDescription="Freehand Los Angeles"
            roomType="Bed in Quad"
            hotelReviews="(1,941 reviews)"
            hotelRating="4.2"
            hotelPrice="/vector13.svg"
            roomPrice="$S 198"
          />
          <CardContainer
            hotelName="/results-image2@2x.png"
            hotelDescription="The Westin Bonavent..."
            roomType="1 King, City view"
            hotelReviews="(1,002 reviews)"
            hotelRating="4.1"
            hotelPrice="/vector14.svg"
            roomPrice="$S 289"
          />
          <ResultsCardContainer
            roomType="/results-image3@2x.png"
            roomDescription="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            roomPrice="/vector15.svg"
            roomSize="/feature-video.svg"
          />
          <iframe
            className={styles.map}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className={styles.map1}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;
