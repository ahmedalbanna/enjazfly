import { FunctionComponent } from "react";
import FormContainer from "./FormContainer";
import styles from "./NewsletterContainer.module.css";

const NewsletterContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <FormContainer
        imageResolution="/newsletter-section-background@2x.png"
        dimensionCode="/logo.svg"
        imageCode="/social-icons.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
