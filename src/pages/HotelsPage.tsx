import { FunctionComponent } from "react";
import Header from "../components/Header";
import LAHeader from "../components/LAHeader";
import HotelResultsContainer from "../components/HotelResultsContainer";
import FormContainer from "../components/FormContainer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LAHeader />
      <HotelResultsContainer />
      <FormContainer
        imageResolution="/newsletter-section-background1@2x.png"
        dimensionCode="/logo3.svg"
        imageCode="/social-icons3.svg"
      />
    </div>
  );
};

export default HotelsPage;
