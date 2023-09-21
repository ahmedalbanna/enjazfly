import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./BookingOptionsCard.module.css";

type BookingOptionsCardType = {
  stopOptionsText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const BookingOptionsCard: FunctionComponent<BookingOptionsCardType> = ({
  stopOptionsText,
  propWidth,
  propWidth1,
}) => {
  const stopsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const resultsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.stops} style={stopsStyle}>
      <b className={styles.results} style={resultsStyle}>
        {stopOptionsText}
      </b>
      <FormControlLabel
        className={styles.component1formcheckbox}
        label="1 Stop"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className={styles.component1formcheckbox1}
        label="2 Stops"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
