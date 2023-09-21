import { FunctionComponent } from "react";
import styles from "./AutocompleteDropdownContainer.module.css";

const AutocompleteDropdownContainer: FunctionComponent = () => {
  return (
    <div className={styles.aDefaultDropdownHasBeenApParent}>
      <div className={styles.aDefaultDropdown}>
        A default dropdown has been applied to your autocomplete which you can
        change using Link Mode. Loco can show you which dropdown to select!
      </div>
      <img className={styles.group2Icon} alt="" src="/group2.svg" />
      <div className={styles.linkModeParent}>
        <b className={styles.linkMode}>Link Mode</b>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <b className={styles.b}>3</b>
        </div>
      </div>
    </div>
  );
};

export default AutocompleteDropdownContainer;
